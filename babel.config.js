module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'

  ],
  plugins: [
      [
          'prismjs',
        {
          languages:[
              'html',
              'css',
              'javascript',
              'cpp',
              'java'
          ],
          plugins:[
              'line-numbers',
              'show-language',
              'copy-to-clipboard'
          ],
          theme:'okaidia',
          css:true
        }
      ],
    '@babel/plugin-transform-private-methods'
  ]
}
