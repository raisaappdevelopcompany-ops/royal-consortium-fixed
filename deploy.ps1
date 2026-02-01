# Royal Consortium Deployment Helper
Write-Host "🚀 Preparing Royal Consortium for Deployment..." -ForegroundColor Cyan

# 1. Run Build to verify
Write-Host "📦 Running production build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 2. Deploy to Vercel
Write-Host "☁️ Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod

Write-Host "✅ Deployment initiated!" -ForegroundColor Green
Write-Host "🔗 Visit your Vercel Dashboard to monitor progress." -ForegroundColor Cyan
