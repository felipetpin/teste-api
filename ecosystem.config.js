module.exports = {
  apps: [{
    name: 'Test API',
    script: 'npm run dev',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    staging: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: '',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging'
    },
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: '',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
