# Apply mobile fixes to specialized courses

$files = @(
    "AIDataAnalytics.tsx", "DataWarehousing.tsx", "AutomationAnywhere.tsx",
    "UiPathTraining.tsx", "BluePrism.tsx", "MachineLearning.tsx",
    "DeepLearning.tsx", "HadoopTraining.tsx", "ApacheSpark.tsx",
    "ETLDevelopment.tsx", "AdvancedJava.tsx", "SpringBootTraining.tsx",
    "VueJSTraining.tsx", "FullStackPythonDevelopment.tsx"
)

$count = 0

foreach ($file in $files) {
    $path = "src\pages\$file"
    if (!(Test-Path $path)) { 
        Write-Host "⚠️  Not found: $file" -ForegroundColor Yellow
        continue 
    }
    
    $c = Get-Content $path -Raw
    
    # All critical mobile fixes
    $c = $c -creplace 'className="flex flex-wrap gap-4 pt-3"', 'className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 pt-3"'
    $c = $c -creplace 'className="text-2xl font-bold text-white mb-1">Counselling Session', 'className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Counselling Session'
    $c = $c -creplace 'className="text-white/90 text-xs mb-1">Book A Free', 'className="text-white/90 text-[10px] md:text-xs mb-1">Book A Free'
    $c = $c -creplace 'className="text-white/80 text-xs">we train you to get hired', 'className="text-white/80 text-[10px] md:text-xs">we train you to get hired'
    $c = $c -creplace 'className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 relative">', 'className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5 relative">'
    $c = $c -creplace '<Briefcase className="w-12 h-12 text-white/20 absolute top-3 right-3" />', '<Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white/20 absolute top-2 md:top-3 right-2 md:right-3" />'
    $c = $c -creplace 'className="bg-white/10 backdrop-blur-md rounded-xl p-4 grid grid-cols-3 gap-3 border', 'className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 grid grid-cols-3 gap-2 md:gap-3 border'
    $c = $c -creplace 'className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"', 'className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"'
    $c = $c -creplace 'className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-2\.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"', 'className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 md:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"'
    
    Set-Content $path -Value $c -NoNewline
    $count++
    Write-Host "✅ $file" -ForegroundColor Green
}

Write-Host "`n🎉 Updated $count specialized course pages!" -ForegroundColor Cyan



