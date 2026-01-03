/**
 * Cron Scheduler for Property Scraper
 * Runs the scraper daily to keep listings fresh
 */

const cron = require('node-cron');
const { scrapeAll } = require('./index');

console.log('🕐 Starting Property Scraper Cron Scheduler...');
console.log('📅 Scheduled to run daily at 6:00 AM Venezuela Time\n');

// Schedule daily scraping at 6:00 AM Venezuela time (UTC-4)
// This means 10:00 AM UTC
cron.schedule('0 10 * * *', async () => {
  console.log('\n' + '='.repeat(60));
  console.log(`🔄 Starting scheduled scrape at ${new Date().toISOString()}`);
  console.log('='.repeat(60) + '\n');

  try {
    const properties = await scrapeAll();
    console.log(`\n✅ Scheduled scrape completed. Found ${properties.length} properties.`);
  } catch (error) {
    console.error('❌ Scheduled scrape failed:', error);
  }
}, {
  timezone: 'America/Caracas'
});

// Also run immediately on startup
console.log('🚀 Running initial scrape...\n');
scrapeAll()
  .then(properties => {
    console.log(`\n✅ Initial scrape completed. Found ${properties.length} properties.`);
    console.log('⏰ Waiting for next scheduled run...\n');
  })
  .catch(error => {
    console.error('❌ Initial scrape failed:', error);
  });

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down scheduler...');
  process.exit(0);
});
