# Add WhatsApp integration to ALL hero forms in ALL course pages

$allPages = Get-ChildItem "src\pages\*.tsx" -Exclude "Index.tsx","Contact.tsx","About.tsx","ContactPage.tsx"

$updated = 0
$skipped = 0

foreach ($file in $allPages) {
    $content = Get-Content $file.FullName -Raw
    
    # Check if already has WhatsApp integration
    if ($content -match 'wa\.me') {
        Write-Host "⏭️  Already has WhatsApp: $($file.Name)" -ForegroundColor DarkGray
        $skipped++
        continue
    }
    
    # Check if has the old toast-only handleFormSubmit
    if ($content -match 'const handleFormSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*toast\(\{[^}]*title: "Enquiry Submitted!"') {
        
        # Extract course name from file
        $courseName = $file.BaseName -creplace '([A-Z])', ' $1' -replace '^\s+', ''
        
        Write-Host "🔧 Updating: $($file.Name) - Course: $courseName" -ForegroundColor Cyan
        
        # Old code to replace
        $oldCode = 'const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We''ll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };'
        
        # New WhatsApp code
        $newCode = "const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = ``*New Counselling Session Request*

👤 *Name:* `${formData.name}
📧 *Email:* `${formData.email}
📱 *Phone:* `${formData.phone}
💬 *Message:* `${formData.message || 'No additional message'}
📚 *Course Page:* $courseName

I am interested in booking a free counselling session. Please contact me at your earliest convenience.``;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = ""918422800381"";
    const whatsappURL = ``https://wa.me/`${whatsappNumber}?text=`${encodedMessage}``;
    
    console.log(""📱 Sending Counselling Request to WhatsApp:"", whatsappMessage);
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    if (whatsappWindow) {
      toast({
        title: ""✅ WhatsApp Opened!"",
        description: ""Your counselling request is ready in WhatsApp. Just click Send!"",
      });
      setTimeout(() => {
        setFormData({ name: """", email: """", phone: """", message: """" });
      }, 2000);
    } else {
      toast({
        title: ""⚠️ Allow Popups"",
        description: ""Please allow popups to send your request via WhatsApp"",
        variant: ""destructive""
      });
      window.location.href = whatsappURL;
    }
  };"
        
        $content = $content -replace [regex]::Escape($oldCode), $newCode
        Set-Content $file.FullName -Value $content -NoNewline
        
        Write-Host "✅ Updated: $($file.Name)" -ForegroundColor Green
        $updated++
    } else {
        Write-Host "⏭️  No standard form found: $($file.Name)" -ForegroundColor Yellow
        $skipped++
    }
}

Write-Host ""
Write-Host "🎉 WhatsApp Integration Complete!" -ForegroundColor Green
Write-Host "✅ Updated: $updated pages" -ForegroundColor Cyan
Write-Host "⏭️  Skipped: $skipped pages (already done or different format)" -ForegroundColor Yellow



