# Apply remaining mobile fixes - course details and buttons

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
    
    # Course details box fixes
    $c = $c -creplace 'className="bg-white/10 backdrop-blur-md rounded-xl p-4 grid grid-cols-3 gap-3 border', 'className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 grid grid-cols-3 gap-2 md:gap-3 border'
    
    # Action button fixes
    $c = $c -creplace 'className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"', 'className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"'
    
    $c = $c -creplace 'className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"', 'className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"'
    
    Set-Content $path -Value $c -NoNewline
    $count++
    Write-Host "✅ $file" -ForegroundColor Green
}

Write-Host "`n🎉 Updated $count pages with course details and button fixes!" -ForegroundColor Cyan



