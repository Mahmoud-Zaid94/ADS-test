const selectors = require('../selectors/home.selectors');
const target = require('../utility/target.ads');
var ads;

describe('Check Ads On Elle Website', () => {

  it('should vertify that "breaker" ad is firing on the page', async () => {
    browser.actions()
      .mouseMove(selectors.footer, { x: 0, y: 0 })
      .mouseDown()
      .mouseMove({ x: 0, y: 0 })
      .perform()
      .then(async () => {
        ads = await browser.executeScript('return gptLayer.slots.map((e)=>{return e.getTargetingMap()})')
        expect(ads[4].position).toEqual(['breaker']);
      });
  });

  it('should verify the location of the ads with location of the target ads', async () => {
    for (var i = 0; i < ads.length; i++) {
      expect(ads[i].loc).toEqual(target.ads[i].loc);
    }
  });

  it('should verify the adid of the ads with adid of the target ads', async () => {
    for (var i = 0; i < ads.length; i++) {
      expect(ads[i].adid).toEqual(target.ads[i].adid);
    }
  });

  it('should verify the size of the ads with size of the target ads', async () => {
    for (var i = 0; i < ads.length; i++) {
      size = await browser.executeScript(`return gptLayer.slots[${i}].getSizes()`);
      expect(size).toEqual(target.size[i]);
    }
  });

  it('should verify the iu_parts of the ads with iu_parts of the target ads', async () => {
    for (var i = 0; i < ads.length; i++) {
      iu = await browser.executeScript(`return gptLayer.slots[${i}].getAdUnitPath()`);
      expect(iu).toEqual(target.iu[i]);
    }
  });

});