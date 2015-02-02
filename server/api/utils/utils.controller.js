'use strict';

var log = require('../../config/winston');

exports.clear = function(store){
  return function(req,res){
    log.info('clearing user data');
    //ig
    store.setItem('instagram_cache', null);
    store.setItem('ig_data', null);
    store.setItem('ig_token', null);
    //twit
    store.setItem('twitter_cache', null);
    store.setItem('twit_data', null);
    //yt
    store.setItem('youtube_cache', null);
    store.setItem('yt_data', null);
    store.setItem('yt_token', null);
    //back to main
    res.redirect('/#');
  };
}
