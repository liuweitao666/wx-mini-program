export class Goods{
  constructor(itemInfo, columns){
    this.topImages=itemInfo.topImages
    this.title = itemInfo.title
    this.columns = columns
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.highPrice = itemInfo.highPrice
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.score = shopInfo.score
    this.services = shopInfo.services
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.shopLogo = shopInfo.shopLogo
  }
}

export class ItemParams{
  constructor(itemParams){
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}
export class DetailInfo{
  constructor(detailInfo){
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage[0].list
    this.key = detailInfo.detailImage[0].key
  }
}

 