# Apply text size fixes for course details

$files = @(
    "SeleniumTesting.tsx", "ISTQBCertification.tsx", "FullStackWebDevelopment.tsx",
    "JavaDevelopmentTraining.tsx", "PythonDevelopmentTraining.tsx", "FullStackDotNetDevelopment.tsx",
    "MERNStackDevelopment.tsx", "MeanStackDevelopment.tsx", "ReactTraining.tsx",
    "AngularTraining.tsx", "WebDesigningTraining.tsx", "DataScienceWithPython.tsx",
    "BigDataEngineering.tsx", "RPATraining.tsx", "DataAnalysisVisualization.tsx",
    "ManagementInformationSystems.tsx", "DigitalMarketing.tsx", "InformationTechnologyProgramme.tsx",
    "GraphicDesigning.tsx", "FinancialAccounting.tsx", "Accounting.tsx",
    "Taxation.tsx", "BCA.tsx", "QuastechDegreeProgram.tsx", "ManualTesting.tsx"
)

$count = 0

foreach ($file in $files) {
    $path = "src\pages\$file"
    if (!(Test-Path $path)) { continue }
    
    $c = Get-Content $path -Raw
    
    # Duration text
    $c = $c -creplace '<div className="text-xl font-bold text-white">(\d+\s*Hrs\.|3\s*Years|6\s*Months|18\s*Months)</div>\s*<div className="text-white/80 text-xs mt-1">Duration</div>', '<div className="text-base md:text-xl font-bold text-white">$1</div><div className="text-white/80 text-[10px] md:text-xs mt-1">Duration</div>'
    
    # Format text (Online/Offline)
    $c = $c -creplace '<div className="text-xl font-bold text-white">(Online/Offline|Blended|UGC Recognized|Degree|Industry Focused|Training)</div>\s*<div className="text-white/80 text-xs mt-1">(Format|Degree|Training)</div>', '<div className="text-xs md:text-xl font-bold text-white leading-tight">$1</div><div className="text-white/80 text-[10px] md:text-xs mt-1">$2</div>'
    
    # LMS/Access text
    $c = $c -creplace '<div className="text-xl font-bold text-white">(LMS|100%|Access)</div>\s*<div className="text-white/80 text-xs mt-1">(Life Time Access|Placement|Access)</div>', '<div className="text-base md:text-xl font-bold text-white">$1</div><div className="text-white/80 text-[10px] md:text-xs mt-1">$2</div>'
    
    Set-Content $path -Value $c -NoNewline
    $count++
    Write-Host "✅ $file" -ForegroundColor Green
}

Write-Host "`n🎉 Updated $count pages with text size fixes!" -ForegroundColor Cyan



