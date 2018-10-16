module.exports = {
  async index (ctx, next) {
    ctx.body = 'about'
    await ctx.render('about', {
      title: '关于'
    })
  }
}
