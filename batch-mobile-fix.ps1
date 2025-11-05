# Batch apply mobile fixes to all course pages

$files = @(
    "SeleniumTesting.tsx", "ISTQBCertification.tsx", "FullStackWebDevelopment.tsx",
    "JavaDevelopmentTraining.tsx", "PythonDevelopmentTraining.tsx", "FullStackDotNetDevelopment.tsx",
    "MERNStackDevelopment.tsx", "MeanStackDevelopment.tsx", "ReactTraining.tsx",
    "AngularTraining.tsx", "WebDesigningTraining.tsx", "DataScienceWithPython.tsx",
    "BigDataEngineering.tsx", "RPATraining.tsx", "DataAnalysisVisualization.tsx",
    "ManagementInformationSystems.tsx", "DigitalMarketing.tsx", "InformationTechnologyProgramme.tsx",
    "GraphicDesigning.tsx", "FinancialAccounting.tsx", "Accounting.tsx",
    "Taxation.tsx", "BCA.tsx", "QuastechDegreeProgram.tsx"
)

$count = 0

foreach ($file in $files) {
    $path = "src\pages\$file"
    if (!(Test-Path $path)) { continue }
    
    $c = Get-Content $path -Raw
    
    # Critical fixes
    $c = $c -creplace 'className="flex flex-wrap gap-4 pt-3"', 'className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 pt-3"'
    $c = $c -creplace 'className="text-2xl font-bold text-white mb-1">Counselling Session', 'className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Counselling Session'
    $c = $c -creplace 'className="text-white/90 text-xs mb-1">Book A Free', 'className="text-white/90 text-[10px] md:text-xs mb-1">Book A Free'
    $c = $c -creplace 'className="text-white/80 text-xs">we train you to get hired', 'className="text-white/80 text-[10px] md:text-xs">we train you to get hired'
    $c = $c -creplace 'className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 relative">', 'className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5 relative">'
    $c = $c -creplace '<Briefcase className="w-12 h-12 text-white/20 absolute top-3 right-3" />', '<Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white/20 absolute top-2 md:top-3 right-2 md:right-3" />'
    
    Set-Content $path -Value $c -NoNewline
    $count++
    Write-Host "✅ $file" -ForegroundColor Green
}

Write-Host "`n🎉 Updated $count pages!" -ForegroundColor Cyan



