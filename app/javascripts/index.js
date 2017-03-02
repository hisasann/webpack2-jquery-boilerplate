import $ from 'jquery';
import Handlebars from 'handlebars';
import './common/style';
import { callApi } from './api/api';
import Env from './common/env';
import topTitleTemplates from './templates/top.title';

console.log(Env);

$(function () {
  console.log('ready');

  // // get sample
  // callApi({
  //   url: '/jsons/sample.json',
  //   method: 'GET',
  //   payload: null
  // }).then((json) => {
  //   console.log(json);
  //   let template = Handlebars.compile(topTitleTemplates);
  //   let html = template({ 'title': json.sample.title });
  //
  //   $('#from-ajax').html(html);
  // });
  //
  // // post sample
  // callApi({
  //   url: '/post',
  //   method: 'POST',
  //   payload: {
  //     name: 'Manny', species: 'cat'
  //   }
  // }).then((json) => {
  //   console.log(json);
  // });
});

console.log('index');