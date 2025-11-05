# Apply ALL mobile responsive fixes to ALL course pages at once

$pages = @(
    "ManualTesting.tsx", "SeleniumTesting.tsx", "ISTQBCertification.tsx",
    "FullStackWebDevelopment.tsx", "JavaDevelopmentTraining.tsx", "PythonDevelopmentTraining.tsx",
    "FullStackDotNetDevelopment.tsx", "MERNStackDevelopment.tsx", "MeanStackDevelopment.tsx",
    "ReactTraining.tsx", "AngularTraining.tsx", "WebDesigningTraining.tsx",
    "DataScienceWithPython.tsx", "BigDataEngineering.tsx", "RPATraining.tsx",
    "DataAnalysisVisualization.tsx", "ManagementInformationSystems.tsx", "DigitalMarketing.tsx",
    "InformationTechnologyProgramme.tsx", "GraphicDesigning.tsx",
    "FinancialAccounting.tsx", "Accounting.tsx", "Taxation.tsx",
    "BCA.tsx", "QuastechDegreeProgram.tsx", "FullStackPythonDevelopment.tsx",
    "AIDataAnalytics.tsx", "DataWarehousing.tsx", "AutomationAnywhere.tsx",
    "UiPathTraining.tsx", "BluePrism.tsx", "MachineLearning.tsx",
    "DeepLearning.tsx", "HadoopTraining.tsx", "ApacheSpark.tsx",
    "ETLDevelopment.tsx", "AdvancedJava.tsx", "SpringBootTraining.tsx", "VueJSTraining.tsx"
)

Write-Host "🚀 Starting mobile responsive fixes for ALL course pages..." -ForegroundColor Cyan
Write-Host "📱 Total pages to update: $($pages.Count)" -ForegroundColor Yellow
Write-Host ""

$updated = 0
$skipped = 0

foreach ($page in $pages) {
    $filePath = "src\pages\$page"
    
    if (!(Test-Path $filePath)) {
        Write-Host "⚠️  File not found: $page" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    $content = Get-Content $filePath -Raw
    $original = $content
    
    # Fix 1: Hero section height
    $content = $content -replace 'className="relative w-full h-\[600px\] flex items-center overflow-hidden"', 'className="relative w-full min-h-[600px] md:h-[600px] flex items-center overflow-hidden py-8 md:py-0"'
    
    # Fix 2: Platform ratings container gap
    $content = $content -replace '(<div className="flex items-center )gap-3( flex-wrap mb-2">)', '$1gap-2 md:gap-3$2'
    
    # Fix 3: Platform rating buttons padding
    $content = $content -replace '(className="flex items-center )gap-2( bg-white/20 backdrop-blur-sm rounded-lg )px-3 py-1\.5', '$1gap-1 md:gap-2$2px-2 md:px-3 py-1 md:py-1.5'
    
    # Fix 4: Course details box
    $content = $content -replace '(className="bg-white/10 backdrop-blur-md rounded-xl )p-4( grid grid-cols-3 )gap-3( border)', '$1p-3 md:p-4$2gap-2 md:gap-3$3'
    
    # Fix 5a: Course details "60 Hrs" text
    $content = $content -replace '(<div className="text-)xl( font-bold text-white">60 Hrs\.)', '$1base md:text-xl$2'
    $content = $content -replace '(<div className="text-white/80 text-)xs( mt-1">Duration)', '$1[10px] md:text-xs$2'
    
    # Fix 5b: Course details "Online/Offline" text (special case - longer text)
    $content = $content -replace '(<div className="text-)xl( font-bold text-white">Online/Offline)', '$1xs md:text-xl$2 leading-tight'
    $content = $content -replace '(<div className="text-white/80 text-)xs( mt-1">Format)', '$1[10px] md:text-xs$2'
    
    # Fix 5c: Course details "LMS" text
    $content = $content -replace '(<div className="text-)xl( font-bold text-white">LMS)', '$1base md:text-xl$2'
    $content = $content -replace '(<div className="text-white/80 text-)xs( mt-1">Life Time Access)', '$1[10px] md:text-xs$2'
    
    # Fix 6: Action buttons container
    $content = $content -replace '(className="flex )flex-wrap gap-4( pt-3">)', '$1flex-col md:flex-row flex-wrap gap-3 md:gap-4$2'
    
    # Fix 7a: Orange action button
    $content = $content -replace '(className=")bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm(")', '$1w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm$2'
    
    # Fix 7b: Teal action buttons  
    $content = $content -replace '(className=")bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm(")', '$1w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm$2'
    
    # Fix 8: Form header padding
    $content = $content -replace '(className="bg-gradient-to-r from-blue-600 to-blue-700 )p-5( relative">)', '$1p-4 md:p-5$2'
    
    # Fix 9: Briefcase icon sizing
    $content = $content -replace '(<Briefcase className=")w-12 h-12 text-white/20 absolute top-3 right-3(")', '$1w-10 h-10 md:w-12 md:h-12 text-white/20 absolute top-2 md:top-3 right-2 md:right-3$2'
    
    # Fix 10a: Form header "Book A Free" text
    $content = $content -replace '(<p className="text-white/90 text-)xs( mb-1">Book A Free)', '$1[10px] md:text-xs$2'
    
    # Fix 10b: Form header "Counselling Session" text
    $content = $content -replace '(<h2 className="text-)2xl( font-bold text-white mb-1">Counselling Session)', '$1lg md:text-2xl$2 leading-tight">Counselling Session'
    
    # Fix 10c: Form header "we train you to get hired" text
    $content = $content -replace '(<p className="text-white/80 text-)xs(">we train you to get hired\.)', '$1[10px] md:text-xs$2'
    
    if ($content -ne $original) {
        Set-Content $filePath -Value $content -NoNewline
        Write-Host "✅ Updated: $page" -ForegroundColor Green
        $updated++
    } else {
        Write-Host "⏭️  No changes: $page" -ForegroundColor DarkGray
        $skipped++
    }
}

Write-Host ""
Write-Host "🎉 MOBILE RESPONSIVE FIXES COMPLETE!" -ForegroundColor Green
Write-Host "✅ Updated: $updated pages" -ForegroundColor Cyan
Write-Host "⏭️  Skipped: $skipped pages" -ForegroundColor Yellow
Write-Host "📱 All course pages are now mobile-friendly!" -ForegroundColor Cyan



