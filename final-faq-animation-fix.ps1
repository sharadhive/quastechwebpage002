# Final fix for FAQ animations - simple line-by-line approach
$files = @(
    "src\pages\PlacementPage.tsx",
    "src\pages\SoftwareTestingTraining.tsx",
    "src\pages\Accounting.tsx",
    "src\pages\BCA.tsx",
    "src\pages\DataAnalysisVisualization.tsx",
    "src\pages\DigitalMarketing.tsx",
    "src\pages\FinancialAccounting.tsx",
    "src\pages\GraphicDesigning.tsx",
    "src\pages\MERNStackDevelopment.tsx",
    "src\pages\ManualTesting.tsx",
    "src\pages\MeanStackDevelopment.tsx",
    "src\pages\PythonDevelopmentTraining.tsx",
    "src\pages\QuastechDegreeProgram.tsx",
    "src\pages\RPATraining.tsx",
    "src\pages\ReactTraining.tsx",
    "src\pages\SeleniumTesting.tsx",
    "src\pages\Taxation.tsx",
    "src\pages\WebDesigningTraining.tsx",
    "src\pages\DataScienceWithPython.tsx",
    "src\pages\FullStackDotNetDevelopment.tsx",
    "src\pages\FullStackPythonDevelopment.tsx",
    "src\pages\JavaDevelopmentTraining.tsx",
    "src\pages\AngularTraining.tsx",
    "src\pages\FullStackJavaDevelopment.tsx",
    "src\pages\InformationTechnologyProgramme.tsx",
    "src\pages\FullStackWebDevelopment.tsx",
    "src\pages\ISTQBCertification.tsx",
    "src\pages\ManagementInformationSystems.tsx",
    "src\pages\BigDataEngineering.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $lines = Get-Content $file -Encoding UTF8
        
        for ($i = 0; $i < $lines.Count; $i++) {
            # Find FAQ accordions animation line after the comment
            if ($lines[$i] -match '\{/\* Right - FAQ Accordions \*/\}') {
                # Look ahead for the initial line
                for ($j = $i; $j -lt [Math]::Min($i + 5, $lines.Count); $j++) {
                    if ($lines[$j] -match 'initial=\{\{ opacity: 0, x: -40 \}\}') {
                        $lines[$j] = $lines[$j] -replace 'x: -40', 'x: 40'
                        break
                    }
                }
            }
            
            # Find image animation line after the comment
            if ($lines[$i] -match '\{/\* Left - Image Side \*/\}') {
                # Look ahead for the initial line
                for ($j = $i; $j -lt [Math]::Min($i + 5, $lines.Count); $j++) {
                    if ($lines[$j] -match 'initial=\{\{ opacity: 0, x: 40 \}\}') {
                        $lines[$j] = $lines[$j] -replace 'x: 40', 'x: -40'
                        break
                    }
                }
            }
        }
        
        $lines | Set-Content $file -Encoding UTF8
        Write-Host "Fixed: $file" -ForegroundColor Green
    } else {
        Write-Host "Not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nAll FAQ animations properly fixed!" -ForegroundColor Cyan

