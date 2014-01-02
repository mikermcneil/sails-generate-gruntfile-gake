module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: './assets',
        src: ['**/*'],
        dest: '.tmp/public'
      }
    ]
  },
  build: {
    files: [
      {
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }
    ]
  }
};
