
var nyumi_api = {
   single_section: function(){
    
    // redirect url
    var url = window.location.href;
    if(url.indexOf('/collections/all/products') != -1){
      url = url.replace('/collections/all', '');  
      window.location.href = url;
    }
       
    //       
    const client = contentful.createClient({      
      space: "537ig19c198x",      
      accessToken: "xrFAWU3JjmllmPiF2MtCWP2bMzCszbQuPjLW0MNogdw"
    }); 
        
    // Purpose section
    client
      .getEntry("6lIWO6fWUYG7pP1JsaS590")
    .then(entry => {
             //Purpose_section(entry.fields);            
      })       
      .catch(err => console.log(err));    
    // Top Section    
    client
      .getEntry("5uLVb46VrfKdvGXCNxuko4")
    .then(entry => {
            // top_section(entry.fields);
            // top_slider();
      })       
      .catch(err => console.log(err));
    
     // Science Section    
    client
      .getEntry("01DAHa2TizKGPevyPF0h7n")
    .then(entry => {
           //  Science_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // Testimonial Section    
    client
      .getEntry("4X1eym1axdU4GSVIyXZ4Z0")
    .then(entry => {
            // Testimonial_section(entry.fields);  
      })       
      .catch(err => console.log(err));
    
    // Press Section    
    client
      .getEntry("7wanxMFgG1xyHcdRDSGT07")
    .then(entry => {
            // Press_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // Our Journal
      client
      .getEntry("51ZgpCqPcbnXPsU7QOXspN")
    .then(entry => {
            // Journal_section(entry.fields);            
      })       
      .catch(err => console.log(err)); 
    
    
    // OUR PRODUCTS
    
     client
      .getEntry("7FTjrOg7iLj4JrmQaC56WO")
    .then(entry => {
            // Product_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
    // collection page
    client
      .getEntry("oowZMfoPUooYvJzz0i4Js")
    .then(entry => {
            // collection_page(entry.fields);            
      })       
      .catch(err => console.log(err)); 
    
    // header
    client
      .getEntry("6Pwg05sBNTJ8MlQsMsbQRP")
    .then(entry => {
           //  header_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
    // footer
     client
      .getEntry("4ovMk9EHjkcyWkySsWy0qd")
    .then(entry => {
           //  footer_section(entry.fields);            
      })       
      .catch(err => console.log(err));
    
      // footer_menu_left
     client
      .getEntry("2GpHeM8MAMiuqUMahzNy3p")
    .then(entry => {
            // footer_menu_left(entry.fields);            
      })       
      .catch(err => console.log(err));
    
     // footer_menu_right
     client
      .getEntry("19PUxtiuGSgnbhhTcccj1c")
      .then(entry => {
           //  footer_menu_right(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    
      // beauty sleep    
       client
      .getEntry("2l45Kyep6E54E1M4KwPCgj")
      .then(entry => {
          //   product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // beauty skin    
       client
      .getEntry("2eJGW91w1rUeCl1f3DT54D")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // beauty uti    
       client
      .getEntry("1BsF4PuDn0XAUgjCi0lNmV")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // Hair and nails
       client
      .getEntry("5EPf833aX5h6x1Otq6WeO4")
      .then(entry => {
           //  product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
     // immunity
       client
      .getEntry("548W3ae5i2K7jKXyMIRZba")
      .then(entry => {
            // product_detail(entry.fields);            
      }).catch(err => console.log(err));
    
      // bundle product  
    // hair, immunity & skin
       client
      .getEntry("364iGETdgnnMbpp9nKEY2N")
      .then(entry => {
       //  product_detail(entry.fields); 
        // add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err));
     
     // hair & Immunity
       client
      .getEntry("4bir2mO127U72i0lMzZekO")
      .then(entry => {
       //  product_detail(entry.fields);      
        // add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err)); 
    
    client
      .getEntry("5erCvHNdeRa0tu9xboehcO")
      .then(entry => {
         // product_detail(entry.fields);      
       //  add_bundle_description(entry.fields);
        // combo_product(entry.fields);
      }).catch(err => console.log(err)); 
    
client
      .getEntry("6T6YOSGitWDwi0rzbRzDCJ ")
      .then(entry => {
       //  product_detail(entry.fields);      
       //  add_bundle_description(entry.fields);
       //  combo_product(entry.fields);
      }).catch(err => console.log(err));  
    
    // hair & skin
       client
      .getEntry("1rbWsvuqC23BmxpSJGVuhY")
      .then(entry => {
       //  product_detail(entry.fields);  
       //  add_bundle_description(entry.fields);
       //  combo_product(entry.fields);
      }).catch(err => console.log(err));
    
     
    
     // science page    
       client
      .getEntry("6uvvsBqfjkfgVQSJO7uuHu")
      .then(entry => {
           //  science_product(entry.fields);            
      })       
      .catch(err => console.log(err));
    
    // faq page    
       client
      .getEntry("7ootLIzwgF7LD3XUhRKrEH")
      .then(entry => {
       //     faq_page(entry.fields);   
          
      })       
      .catch(err => console.log(err));
    
	  // blog    
      client
      .getEntry("2t82O294d7DhdlAALd3XF9")
      .then(entry => {
        //    blog_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
      // contact     
      client
      .getEntry("6ZXJHRikQcgNR83uq3COVt")
      .then(entry => {
         //   contact_page(entry.fields);            
      }).catch(err => console.log(err));
    
     // about page
    client
      .getEntry("5G31bFNfBIB1pwwanw06uO")
      .then(entry => {
         //   about_page(entry.fields);            
      }).catch(err => console.log(err));
    
     // ingredients page
    client
      .getEntry("5EC81MNLMexOj0nEWboRGY")
      .then(entry => {
        //    ingredients_page(entry.fields);            
      }).catch(err => console.log(err));
    
    // ingredients page
    client
      .getEntry("1R0xVBStpmMpv8Y707SsBC")
      .then(entry => {
        //    footer_menu(entry.fields);            
      }).catch(err => console.log(err));
    
    
    // careers page
    client
      .getEntry("6M9PAOFsZWExIybLE3sjXc")
      .then(entry => {
        //    careers_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
    // terms_use_page
    client
      .getEntry("p27demlw9dm3X8nRoQF6S")
      .then(entry => {
          //  terms_use_page(entry.fields);            
      }).catch(err => console.log(err));
    
    // Privacy policy
    client
      .getEntry("2jFQSyT0aImMw8DU5E7nXs")
      .then(entry => {
         //   terms_use_page(entry.fields);            
      }).catch(err => console.log(err));
    
    
    
     // blog page    
    client
      .getEntry("4OwNUiqgbRnf51xSOLGGV6")
      .then(entry => {
        //    bolg_new(entry.fields);            
      }).catch(err => console.log(err));
    
    
    function bolg_new(value){
       
       if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){       
         page_meta_description(value);
       }
   }
    
    
    function terms_use_page(value){
      
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
       
        page_meta_description(value);
        
        if(typeof value.sections[0].fields.text1 !== 'undefined'){
          
           var section = value.sections[0].fields.text1;
           var text = editer_value(section);          
           $('#page_content_fixed').html(text);
        }
        
      }
    }
    
    
    function page_meta_description(value){
       
       
      var meta= '', description = '';
      if(typeof value.metaTitle !== 'undefined'){
        var meta =  '<title>'+value.metaTitle+'</title>';
        $('html head').append(meta);
      }
      if(typeof value.metaDescription !== 'undefined'){
        if(typeof value.metaDescription.content  !== 'undefined'){
          description = '<meta name="description" content="'+value.metaDescription.content[0].content[0].value+'">';
        }else{
          description = '<meta name="description" content="'+value.metaDescription+'">';
        }
        $('html head').append(description);
      }
      
      
    }
    
   function editer_value_space(value){
      var text = '';
          
        $(value.content).each(function(i,txt1){
                
                if(txt1.nodeType == 'unordered-list' || txt1.nodeType == 'ordered-list'){                    
                    $(txt1.content).each(function(x2, txt2){                      
                      var list_item = false;
                      if(txt2.nodeType == 'list-item'){
                            text +='<ul>';
                        	list_item = true;
                       }                      
                        $(txt2.content).each(function(x3, txt3){                            
                          
                          if(list_item)
                            text +='<li>';
                            
                          $(txt3.content).each(function(x4, txt4){
                            
                           
                            
                              var bold_start = '', bold_false ='', underline_start= '', underline_end= '';
                          if(typeof txt4.marks !== 'undefined' ){
                             $(txt4.marks).each(function(x, mark){ 
                                if(mark.type == 'bold'){
                                  bold_false = '</b>'; 
                                  bold_start = '<b>'; 
                                }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                                }                             
                               
                             });
                            
                              
                            /*                            
                             if(txt4.nodeType == 'hyperlink'){
                              var url = txt4.data.uri;
                              if(typeof txt4.content[0] !== 'undefined' ){
                                var txt = txt4.content[0].value;
                                text += '<a href="'+url+'">'+txt+'</a>';
                              }
                            }
                           */
                            
                          }
                            
                            if(typeof txt4.value !== 'undefined'){
                             text += underline_start+ bold_start+txt4.value+bold_false+underline_end;
                            }
                                               
                          });
                          if(list_item){
                            text +='</li>';
                          }else{                          
                            text += '<br/>';     
                          }
                          
                        });
                      
                       if(txt2.nodeType == 'list-item'){
                            text +='</ul>';
                        }
                    });
                    text += '<br/>';

                }else if(txt1.nodeType =='embedded-asset-block'){
                  
                   if(typeof txt1.data.target.fields.file.url  !== 'undefined' ){
                     text += '<img src="'+txt1.data.target.fields.file.url+'" alt="#"/>';
                   }
                  
                }else{              
                 
                    var heading = '', heading_end = '';
                    if(txt1.nodeType == 'heading-1'){
                      heading = '<h1>';
                      heading_end = '</h1>';
                    }else if(txt1.nodeType == 'heading-2'){
                      heading = '<h2>';
                      heading_end = '</h2>';
                    }if(txt1.nodeType == 'heading-3'){
                      heading = '<h3>';
                      heading_end = '</h3>';
                    }if(txt1.nodeType == 'heading-4'){
                      heading = '<h4>';
                      heading_end = '</h3>';
                    }
                      
                  $(txt1.content).each(function(x, txt2){
                     
                    var bold_start = '', bold_false ='', underline_start= '', underline_end= '';;
                    if(typeof txt2.marks !== 'undefined' ){
                       $(txt2.marks).each(function(x, mark){ 
                          if(mark.type == 'bold'){
                            bold_false = '</b>'; 
                            bold_start = '<b>'; 
                          }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                           }
                           
                       });
                    }
                    
                     if(typeof txt2.value !== 'undefined'){
                       text += heading+underline_start+bold_start+txt2.value + bold_false+underline_end+heading_end;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                    text += '<br/>';
                }
                	
                });
        return text;
      
    }
    
    
    function editer_value(value){
      var text = '';
         
        $(value.content).each(function(i,txt1){
                
                if(txt1.nodeType == 'unordered-list' || txt1.nodeType == 'ordered-list'){
                    
                    $(txt1.content).each(function(x2, txt2){
                      
                      var list_item = false;
                      if(txt2.nodeType == 'list-item'){
                            text +='<ul>';
                        	list_item = true;
                       }
                      
                        $(txt2.content).each(function(x3, txt3){ 
                           
                          
                          if(list_item)
                            text +='<li>';
                            
                          $(txt3.content).each(function(x4, txt4){
                            
                              var bold_start = '', bold_false ='', underline_start= '', underline_end= '';
                          if(typeof txt4.marks !== 'undefined' ){
                             $(txt4.marks).each(function(x, mark){ 
                                if(mark.type == 'bold'){
                                  bold_false = '</b>'; 
                                  bold_start = '<b>'; 
                                }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                                }
                               
                               
                             });
                          }
                            
                           text += underline_start+ bold_start+txt4.value+bold_false+underline_end;
                          });
                          if(list_item){
                            text +='</li>';
                          }else{                          
                            text += '<br/>';     
                          }
                          
                        });
                      
                       if(txt2.nodeType == 'list-item'){
                            text +='</ul>';
                        }
                      

                    });
                    text += '<br/>';

                  }else if(txt1.nodeType =='embedded-asset-block'){
                  
                   if(typeof txt1.data.target.fields.file.url  !== 'undefined' ){
                     text += '<img src="'+txt1.data.target.fields.file.url+'" alt="#"/>';
                   }
                  
                }else{              
                 
                    var heading = '', heading_end = '';
                    if(txt1.nodeType == 'heading-1'){
                      heading = '<h1>';
                      heading_end = '</h1>';
                    }else if(txt1.nodeType == 'heading-2'){
                      heading = '<h2>';
                      heading_end = '</h2>';
                    }if(txt1.nodeType == 'heading-3'){
                      heading = '<h3>';
                      heading_end = '</h3>';
                    }if(txt1.nodeType == 'heading-4'){
                      heading = '<h4>';
                      heading_end = '</h3>';
                    }
                      
                  $(txt1.content).each(function(x, txt2){
                     
                    var bold_start = '', bold_false ='', underline_start= '', underline_end= '';;
                    if(typeof txt2.marks !== 'undefined' ){
                       $(txt2.marks).each(function(x, mark){ 
                          if(mark.type == 'bold'){
                            bold_false = '</b>'; 
                            bold_start = '<b>'; 
                          }else if(mark.type == 'underline'){
                                  underline_start = '<span style="text-decoration: underline">';
                                  underline_end = '</span>';
                           }
                           
                       });
                    }
                    
                     if(typeof txt2.value !== 'undefined'){
                       text += heading+underline_start+bold_start+txt2.value + bold_false+underline_end+heading_end;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                    
                    text += '<br/><br/>';
                }
                	
                });
        return text;
      
    }
    
    
    function Journal_section(value){
    
      $('#featured_Journal').hide();
      
     if(value.sectionVisible){
       
     setTimeout(function(){
          $(value.blog).each(function(index, item){

            var title='',img='', subtitle='';

            if(typeof item.fields.title !=='undefined'){
              title = item.fields.title;
            }
            if(typeof item.fields.subtitleForHomepage !=='undefined'){
              subtitle = item.fields.subtitleForHomepage;
            }
            if(typeof item.fields.featuredBlogImage !=='undefined'){
              img = item.fields.featuredBlogImage.fields.file.url;
            }

            var slg_title = title.replaceAll(' ', '-');

            var post = '<li class="grid__item medium-up--one-third"><article><header>'+
                         '<a href="/blogs/news" class="article__link">';
                if(img != ''){
                    post += '<div class="article__grid-image-wrapper"><img class="article__grid-image_new" src="'+img+'" alt="'+title+'"/></div>';
                }
                post += '</a>'+
                        ' <h3 class="article__title"><a href="/blogs/news"> '+title+'</a> </h3>'+
                         '<div class="rte article__grid-excerpt">'+subtitle+'</div>'+
                       '</header></article></li>';

            $('#blog_home').append(post);

           });   

          $('#featured_Journal').show();
     
   		}, 8800);
     }
      
   }
    
    
    function careers_page(value){
      
       if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
         
         page_meta_description(value);
         
         $(value.sections).each(function(index, item){            
           // banner
           if(index == 0){
             if(typeof item.fields.title !== 'undefined'){
               $('#careers_banner h1').html(item.fields.title);
             }
             var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }
             $('#careers_banner .crsbn_txt p').html(text);
             
             // button crsbn_btn
             if(typeof item.fields.ctaCallToAction !== 'undefined'){
             	var id = item.fields.ctaCallToAction.sys.id;
                
                 if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       banner_btn(entry.fields);                      
                    }).catch(err => console.log(err));
                  }                
             }
             
             // image
             var left_img ='';
             if(typeof item.fields.image !== 'undefined'){
               left_img = item.fields.image.fields.file.url;
             }
             
             if(left_img !=''){
               var style = '<style>.careers_banner:before{background-image:url('+left_img+')}</style>';
               $('#careers_banner').append(style);
             }
             
             if(typeof item.fields.animatedIconsIfAny !== 'undefined'){ 
                var id = item.fields.animatedIconsIfAny[0].sys.id;
                
                 if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       banner_right(entry.fields);                      
                    }).catch(err => console.log(err));
                  }                 
             }
             
             
           }else if(index == 1){             
             var title = '';
             if(typeof item.fields.title !== 'undefined'){             	 
               $('#core_value h2').html(item.fields.title);
             }
             var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }
             $('#core_value .crv_description p').html(text);
             
             $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
               var id = list.sys.id;
               
               if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       careers_item(entry.fields);                      
                    }).catch(err => console.log(err));
                  }               
             }); 
             
             if(typeof item.fields.image  !== 'undefined'){ 
               var img =  item.fields.image.fields.file.url;
               $('#core_value .crv_inner').html('<img src="'+img+'" alt="#"/>');
             }
              
           }else if(index == 2){
             var title = item.fields.title;
             $('#carrer_opp_section h2').html(title);             
             
              var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                    text +=txt2.value;
                  });
                  
                });                
              }             
             $('#carrer_opp_section .crrpp_description p').html(text);
             
              
             $(item.fields.careeropportunities).each(function(no, list){
               
               var id = list.sys.id;

               if(typeof id !== 'undefined'){
                 client
                 .getEntry(id)
                 .then(entry => {                     
                   careers_location(entry.fields, no);                      
                 }).catch(err => console.log(err));
               }  
            
             });
             
           }else if(index == 3){
             var title = '';
             if(typeof item.fields.title !== 'undefined'){
             	title = item.fields.title;
             }
             
              var text = '';
              if(typeof item.fields.text1 !== 'undefined'){                
                $(item.fields.text1.content).each(function(i,txt1){
                  $(txt1.content).each(function(x, txt2){
                     if(typeof txt2.value !== 'undefined'){
                       text +=txt2.value;
                      }else if(txt2.nodeType == 'hyperlink'){
                        var url = txt2.data.uri;
                        if(typeof txt2.content[0] !== 'undefined' ){
                          var txt = txt2.content[0].value;
                          text += '<a href="'+url+'">'+txt+'</a>';
                        }
                      }                   
                    
                  });
                  text +='<br/><br/>';
                });                
              }
             
              $('#careers_bottom_banner .crbb_heading').html(title);
             $('#careers_bottom_banner .crbb_txt').html('<p>'+text+'</p>');
             
           }
          
           
         });
       }
      
    }
    
    
    
    
    
    function careers_location(value, no){
      
      var position = '';
      var Location = '';
      var description = '';
      var url ='';
      var txt = '';
      
      if(typeof value.applyNow !== 'undefined')
      txt = value.applyNow;
      
      if(typeof value.location !== 'undefined')
      Location = value.location;
      
      if(typeof value.positionName !== 'undefined')
      position = value.positionName;      
      
        if(typeof value.description !== 'undefined'){                
          $(value.description.content).each(function(i,txt1){
            if(txt1.nodeType == 'unordered-list'){
              
              $(txt1.content).each(function(x, txt2){
                  $(txt2.content).each(function(x, txt3){                    
                    description +=txt3.content[0].value;
                    description += '<br/>';
                  });
                
              });
              description += '<br/>';
              
            }else{              
              $(txt1.content).each(function(x, txt2){
                description +=txt2.value;
              });
               description += '<br/><br/>';
            }
          });                
        }
               
      var html = '<div class="crpp_accouding">'+
          '<div class=" crrpac_item" data-id="'+no+'">'+
          '<div class="crpac_flx crrpac_text">'+
          '<div class="crpac_flx_item">' +position+ ' </div>'+
          '<div class="crpac_flx_item">'+Location+' </div>'+
          '</div>'+
          '</div> '+

          ' <div class="crpac_description" data-id="'+no+'">'+
          '<div class="crpac_description_inner">'+
          ' <div class="crpac_description_txt">'+  description + '</div>'+

          '<div class="crpac_btn_outer">'+
          '<a href="mailto:careers@nyumi.com?subject='+position+'" class="crpac_btn">'+txt+'</a>'+
          ' </div>  '+
          '</div>'+
          ' </div>'
          '</div>';
      
      	$('#carrer_opp_section .crpp_accouding_outer').append(html);
    }
    
    function careers_item(value, no){
     
      var img = '';
      var title = '';
      var description = '';
      
      title = value.title;
      if(typeof value.icon !== 'undefined'){
        img = value.icon.fields.file.url;
      }
      
      
      if(typeof value.description !== 'undefined'){                
        $(value.description.content).each(function(i,txt1){
          $(txt1.content).each(function(x, txt2){
            description +=txt2.value;
          });

        });                
      }
      
      var html = '<div class="crv_items">'+
                   '<div class="crv_icon">';
      			if(img != '')
                html += '<img src="'+img+'" alt="#"/>';
      
               html += '</div>'+
                   '<div class="crv_itme_txt">'+
                     '<div class="crv_item_headiing">'+title+' </div>'+
                     '<div class="crv_item_descrption">'+
                       '<p>'+description+' </p>'+
                     '</div>'+
                   '</div>'+
                 '</div>';
      
      $('#core_value .crv_list').append(html);
    }
    
    function banner_right(value){
      var img = value.imagegif.fields.file.url;
      
      if(typeof img !== 'undefined'){
         var style = '<style>.careers_banner:after{background-image:url('+img+')}</style>';
         $('#careers_banner').append(style);
      }
    }
    
    function banner_btn(value){
      
      var btn_txt = value.buttonTextLable;
      var link = '';
      if(typeof value.link !== 'undefined'){
        link = value.link.content[0].content[0].value;
      }
      if(typeof btn_txt  !== 'undefined'){
      	$('#careers_banner .crsbn_description').append('<a class="crsbn_btn" href="'+link+'">'+btn_txt+'</a>');
      }
    }
    
    function footer_menu(value){
      
      
      $(value.menuItems).each(function(index, item){
            var name = item.fields.title;
        	var url = item.fields.link.content[0].content[0].value;
        	var i = index+1;
        	var html = '<span class="nameset first'+i+'">'+
                		'<a href="'+url+'">'+name+'</a></span>';        
        	$('#footer_copy_right').append(html);        
      });
      $('.copyryt p').html(value.title);
      
    }
    
    function ingredients_page(value){
         
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          if(index == 0){          	 
            if(typeof item.fields.text1 !== 'undefined'){             
             $('#ingredients_banner h3').html(item.fields.text1.content[0].content[0].value);
             $('#ingredients_banner h1').html(item.fields.text1.content[1].content[0].value);
            }            
          }else if(index == 1){
              
              if(typeof item.fields.text1 !== 'undefined'){                
              	$('#ingredient_full_list .ingfl_top').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
              }
            
            $(item.fields.activeIngredients).each(function(i, list){
                var id = list.sys.id;               
                if(typeof id !== 'undefined'){
                  client
                  .getEntry(id)
                  .then(entry => {                     
                     Ingredients_item(entry.fields, i);                      
                  }).catch(err => console.log(err));
                }
            });
                        
          }else if(index == 2){          
            $('#comp_ingred_slider .section_heading').html(item.fields.title);
            
             if(item.fields.text1)
             $('#comp_ingred_slider .section_subheading').html(item.fields.text1.content[0].content[0].value);
            
               $(item.fields.storyIngredients).each(function(i, list){
                  var id = list.sys.id;               
                  if(typeof id !== 'undefined'){
                    client
                    .getEntry(id)
                    .then(entry => {                     
                       slider_item(entry.fields);
                       slider_int();
                    }).catch(err => console.log(err));
                  }
              }); 
          }else if(index == 3){    
            
            $('#ingredient .faq_title').html(item.fields.title);
            
            if(typeof item.fields.text1 !== 'undefined')
             $('#ingredient .faq_decription_txt').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
            
            $(item.fields.text2.content[1].content).each(function(i, list){                 
            	var html = '<li><span class="inner">'+list.content[0].content[0].value+'</span></li>';
              	$('#ingredient .strikeout').append(html);
            });
            
            
          }else if(index == 4){ 
            
            var img = '';
            if(typeof item.fields.image !== 'undefined')
               img = item.fields.image.fields.file.url;
               
            var html = '<div class="half indgpg center">';
               if(img != '')
                 html +=  '<img src="'+img+'" alt="#">';
                 html +=  '</div>'+
                      '<div class="half vertical_center">'+
                        '<h3 class="cm_title">'+item.fields.title+'</h3>'+
                        '<div class="ltx_detion">'+
                          '<p>'+ item.fields.text1.content[0].content[0].value+ '</p>'+
                        '</div>'+
                        '<div class="cm_but"><a id="Purpose-button" class="button" href="https://nyumi.com/pages/ingredients">our science</a></div>'+
                      '</div> ';
            
            $('#indgpg_box_txt_img').html(html);
          }
          
          
        });
        
      }
    }
    
    function slider_item(value){      
      var img = '';
      if(value.image)
       img = value.image.fields.file.url;
      
      var html = '<li>';
      	  if(img != '')
          html +=  '<img src="'+img+'" alt="#">';
          html +=   '<h4>'+value.name+'</h4><p>';
           
          html +=  '<p>'+value.features +'</p>';
         
          if(value.sourceLocation)
          html += '<span class="component_location"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map-black.png" alt="#"/>'+value.sourceLocation+'</span>';
          html += '</li>';
      $('#comp_ingred_slider .component_slider').append(html);
    }
    
    function Ingredients_item(value, index){ 
       
      var img = '';     
      if(typeof value.image !== 'undefined')
       img = value.image.fields.file.url;
        
      var active_class='';
      if(index == 0){
        active_class = 'active';
      }
        
      // list 
      var list_html = '<li data-id="'+index+'" class="'+active_class+'">';
      		if(img != '')
      		list_html += '<img src="'+img+'" alt="#">';
            list_html += '<span>'+ value.name+'<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/arrow-right.png?v=57770472121948948791682513552" alt="#"></span></li>' ;
            
      $('#Ingredients_item .ingf_list ul').append(list_html);
      
      // full detail
       var description = '', willfind = '';
      if( value.description)
      description = value.description.content[0].content[0].value;
      
      if( value.youWillFind){         
        $(value.youWillFind.content).each(function(i, txt){        
         willfind += txt.content[0].value +'<br/>';
        });
      }
      
      var full_html = '<li class="'+active_class+'">';
        if(img != '')
        full_html += '<img src="'+img+'" class="ing-image" alt="#">'; 
        full_html += '<div class="ingf_txt_box">'+      				 
                     '<h4>'+ value.name+'</h4>'+
                     '<div class="ingf_txt_style">'+
                      '<p>'+description+'</p>';      
           
          if(typeof value.sourceLocation != 'undefined'){
             var features = value.sourceLocation;            
             features = features.replaceAll('|', '<br/>');            
            
            full_html += '<span class="simple_box">'+
                        '<strong>Source </strong>'+
                        '<span class="smp_txt"> '+features+' </span>'+
                        '</span>';
            
            //  <img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map.png" alt="#"/>
          }
      
          if(willfind != ''){
            full_html += '<span class="simple_box">'+
              '<strong>You’ll find it in:</strong>'+
              '<span class="smp_txt">'+willfind+'</span>'+
              '</span> </div> </div>   </li>';
          }
      
     $('#Ingredients_item .ingf-slider').append(full_html);
      
    }
    
    function about_page(value){
     
  
      
      if(typeof value.pageUrl !== 'undefined'){
        var link = window.location.href;         
        if(link.indexOf(value.pageUrl) != -1){
         page_meta_description(value);
         
        	$(value.sections).each(function(index, item){
              if(index == 0){
                
                if(typeof item.fields.text1 !== 'undefined' ){
                  $('.about_banner h1').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2 !== 'undefined' ){
                  $('.about_banner .abbn_txt').html('<p>'+item.fields.text2.content[0].content[0].value+'</p>');
                }
              }
              if(index == 1){
                var per = '', per_txt ='', description='', man_img='';
                if(typeof item.fields.text1 !== 'undefined')
                per = item.fields.text1.content[0].content[0].value;
                
                if(typeof item.fields.text2 !== 'undefined')
                per_txt = item.fields.text2.content[0].content[0].value;
                
                if(typeof item.fields.text3 !== 'undefined')
                description = item.fields.text3.content[0].content[0].value;
                  
                if(typeof item.fields.image !== 'undefined')
                man_img = item.fields.image.fields.file.url;
                   
                $('#pre_txt_image .per_value').html(per);
                $('#pre_txt_image .per_txt').html(per_txt);
                $('#pre_txt_image .ptmg_description').html('<p>'+description+'</p>');
                
                if(man_img != ''){
                 // $('#pre_txt_image .ptmg_img').html('<img src="'+man_img+'"/>');
                }
                
              }else if (index == 2){
                
                if(typeof item.fields.text1 !== 'undefined'){
                  $('#founder-journey .abtct_txt').html('<p>'+item.fields.text1.content[0].content[0].value+'</p>');
                   $('#founder-journey .abtct_small h3').html(item.fields.text1.content[1].content[0].value);
                  $('#founder-journey .abtct_sml_txt').html(item.fields.text1.content[2].content[0].value);
                }
                
                 if(typeof item.fields.text1 !== 'undefined')
                 $('#founder-journey h2').html(item.fields.title);
                 
              }else if (index == 3 || index == 4 ||  index == 5){
                
                    var img= '';
                    var flx_reverse = 'flx_reverse';
                if(index % 2){
                  flx_reverse= '';
                }                    
                    if(typeof item.fields.image != 'undefined')
                    img = item.fields.image.fields.file.url;
                
         			var html = '<div class="abt_left_image ">'+
                              '<div class="page_width"><div class="abtlf_flx '+flx_reverse+'">'+
                                '<div class="abtlf_txt">'+
                                   ' <h3>'+item.fields.title+'</h3>'+
                                   '<div class="abtlth_description">'+
                                    '<p>'+item.fields.text1.content[0].content[0].value+' </p>'+
                                   '</div>'+
                                 '</div>  '+
                                 '<div class="abtlf_img">';
                				  if(img != '')
                                    html += '<img src="'+img+'" alt="#">';
                
                              html += '</div> '+
                               '</div></div>'+
                            '</div>';
                
                 $('#abt_txt_full').append(html);
              
              }else if(index == 6){
                
                $('#abut_founder-des h3').html(item.fields.title);
                $('#abut_founder-des .txt_founder').html(item.fields.text1.content[0].content[0].value);
              }
              
            });
       }
      }
    }
    
    
    
    function contact_page(value){
       
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          if(index == 0){
            if(typeof item.fields.text1 !== 'undefined'){
              $('#contact_heading .cnth_heading').html(item.fields.text1.content[0].content[0].value);
            }

             if(typeof item.fields.text2 !== 'undefined'){
              $('#contact_heading .cnth_txt').html(item.fields.text2.content[0].content[0].value);
            }
          }else if (index == 1){
            
            if(typeof item.fields.text1 !== 'undefined'){
              $('#addres_info #email_section .cmcl').html(item.fields.text1.content[0].content[0].value);
              var email = item.fields.text1.content[1].content[0].value;
              $('#addres_info #email_section .infor').html('<a href="email:'+email+'">'+email+'</a>');
            }
            
            if(typeof item.fields.text2 !== 'undefined'){
              $('#addres_info #call_section .cmcl').html(item.fields.text2.content[0].content[0].value);
              var email = item.fields.text2.content[1].content[0].value;
              $('#addres_info #call_section .infor').html('<a href="tel:'+email+'">'+email+'</a>');
            }
            if(typeof item.fields.text3 !== 'undefined'){
              $('#addres_info #sunemail_section .cmcl').html(item.fields.text3.content[0].content[0].value);
              var email = item.fields.text3.content[1].content[0].value;
              $('#addres_info #sunemail_section .infor').html('<a href=email:"'+email+'">'+email+'</a>');
            }
            
          }else if (index == 2){
            
           // item.image.fields.file.url;
            if(typeof item.fields.text1 !== 'undefined'){
               $('#find_more h2').html(item.fields.text1.content[0].content[0].value);
            }
            if(typeof item.fields.image !== 'undefined'){
              var html = '<div class="imgseting">'+
                           '<img src="'+item.fields.image.fields.file.url+'"> '+
                          '</div>';
              
              $('#find_more .find_more_imgs').append(html);
            }
            
          }
          
          
        });
        
      }
      
    }
    
    
    
    function isFutureDate(dateText) {

            var dateEntered = dateText; 
              var year  = dateEntered.substring(0, 4);
              var month = dateEntered.substring(5, 7);
              var date = dateEntered.substring(8, 10); 
      
              var dateToCompare = new Date(year, month - 1, date);
              var currentDate = new Date(); 
              
              if (dateToCompare > currentDate) {
                   return false;
              }
              else {
                   return true;
              }
        }
    
    var featured_post = 0;
    function Featured_post_detail(item, index){
       
        var img = '';
       
          if(typeof item.fields.featuredBlogImage  !== 'undefined'){
            img = item.fields.featuredBlogImage.fields.file.url
          }
          var sort_detail = item.fields.blogContentBody.content[0].content[0].value;
            
          var section = item.fields.blogContentBody;
          var full_txt = editer_value_space(section);
            
          var readmore_btn = '';
            
            var title = '', slg_title = '';
            if(typeof item.fields.title !== 'undefined'){
              title = item.fields.title;
              slg_title = title.replaceAll(' ', '-');
              slg_title = slg_title.replaceAll(',', '');
              slg_title = slg_title.replaceAll('!', '');
              slg_title = slg_title.replaceAll(':', '');
            }

          if(sort_detail.length > 155){
    		sort_detail = sort_detail.substring(0,200) + '...';            
          }
       
          readmore_btn = '<a class="bgpt_btn" href="'+slg_title+'">read more > </a>';
         
          var post = '<div class="inlpst_item" data-id="p'+index+'">'+
                      '<a class="post_detail_url" href="/blogs/news/'+slg_title+'"></a>'+
                        '<div class="inlpst_img">';
                      if(img){
                         post +='<img src="'+img+'" alt="#" />';
                      }
                post +=  '</div>'+

                        '<div class="inlpst_txt">'+
                          '<div class="inlpst_catg">'+item.fields.categoryName+'</div>'+
                          '<div class="inlpst_title">'+title+'</div>'+
                          '<div class="inlpst_description">'+sort_detail+'</div>'+
                        '</div>'+ 
                      '</div>';
      
          var post_detail = '<div class="inlpst_big" data-id="p'+index+'">'+
              				 
                             '<div class="bgpt_flx">'+
                          '<div class="bgpt_img">';
      				if(img){	
                  		post_detail += '<img src="'+img+'" alt="#" />';
                    }
                  post_detail +=  '</div>'+
                          '<div class="bgpt_txt">'+
                            '<div class="bgpt_txt_inner">'+

                              '<div class="post_catg">'+item.fields.categoryName+'</div>'+
                              '<div class="post_title">'+title+'</div>'+
                              '<div class="post_description">'+sort_detail+'</div>'+

                            '</div>'+
                         ' </div>'+
                       ' </div> '+
                         '<div class="bgpt_post_detail" data-title="'+title+'"> '+
                          '<div class="bgpt_post_detail_flx">'+
                            '<div class="bgpt_social">'+
                              '<div class="social_icon">'+
                                '<div class="social_icon_close"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_503_2x_d4585c32-280d-44fd-ae25-6e09b98341f3.png" alt="close"/></div>'+
                                '<ul class="bgpt_social_list">'+
                                  '<li><a target="_blank" href="https://www.facebook.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_497_2x_de9f3124-6476-42b6-996f-572df3a74784.png" alt="facebook"/></a></li>'+
                                  '<li><a target="_blank" href="https://twitter.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_499_2x_630a780c-5da5-4bd2-ba13-e11aa1d3a928.png" alt="twitter"/></a></li>'+
                                  '<li><a target="_blank" href="https://www.instagram.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_501_2x_44bf93a1-6734-4d26-8f62-ea89137f29e7.png" alt="pistagram"/></a></li>'+
                                '</ul>'+
                              '</div>'+
                            '</div>'+
                            '<div class="bgpt_description"> '+full_txt+ '</div>'+
                         ' </div> '+
                       ' </div> '+
                         ' </div>';
                
          
                if(featured_post < 3){
                  $('#Featured_post_item').append(post);
                  $('#Featured_post_detail').append(post_detail);
                }else{
                   $('#Featured_post_item_bottom').append(post);
                   $('#Featured_post_detail_bottom').append(post_detail);
                }
      		featured_post +=1;
            
    }
    
    
    function blog_page(value){
      
      var link = window.location.href;         
        if(link.indexOf('/blogs/news') != -1){
          
     // if(window.location.pathname == '/blogs/news'){
        
        redirect_url(value); 
        
        page_meta_description(value);
        
        $(value.blog).each(function(index, item){
         
           
          if(isFutureDate(item.fields.blogPublishingDate)){
                        
            if(typeof item.fields.featuredOnBlogListingPage !== 'undefined' && item.fields.featuredOnBlogListingPage){
                Featured_post_detail(item, index);
            } 
            
              var img = ''; 
             

                    if(typeof item.fields.featuredBlogImage  !== 'undefined'){
                      img = item.fields.featuredBlogImage.fields.file.url
                    }
                    var sort_detail = item.fields.blogContentBody.content[0].content[0].value;

                    var section = item.fields.blogContentBody;
                    var full_txt = editer_value_space(section);

                    var readmore_btn = '';

                      var title = '', slg_title = '';
                      if(typeof item.fields.title !== 'undefined'){
                        title = item.fields.title;
                        slg_title = title.replaceAll(' ', '-');
                        slg_title = slg_title.replaceAll(',', '');
                        slg_title = slg_title.replaceAll(':', '');
                        slg_title = slg_title.replaceAll('!', '');
                      }

                    if(sort_detail.length > 155){
                      sort_detail = sort_detail.substring(0,200) + '...';            
                    }
                    readmore_btn = '<a class="bgpt_btn aaa" href="/blogs/news/'+slg_title+'">read more > </a>';


                    var post = '<div class="blog_post" data-cat="'+item.fields.categoryName+'">'+
                                '<div class="bgpt_flx">'+
                                  '<div class="bgpt_img">';
                                  if(img != ''){
                                    post += '<img src="'+img+'" alt="" />';
                                  }
                        post +=    '</div>'+
                                  '<div class="bgpt_txt">'+
                                    '<div class="bgpt_txt_inner">';
                                  if(index == 0){
                                     post +=  '<div class="sub_title">THIS JUST IN</div>';
                                  }
                         post +=    '<div class="post_catg">'+item.fields.categoryName+' I '+ item.fields.readingTime+'</div>'+
                                      '<div class="post_title"><a class="url_title" href="/blogs/news/'+slg_title+'">'+title+'</a></div>'+
                                      '<div class="post_description"> <p>'+sort_detail+ readmore_btn+ '</p>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+

                                '<div class="bgpt_post_detail" data-title="'+title+'">'+ 
                                 ' <div class="bgpt_post_detail_flx">'+
                                    '<div class="bgpt_social">'+
                                      '<div class="social_icon">'+
                                       ' <div class="social_icon_close" data-url="'+slg_title+'"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_503_2x_d4585c32-280d-44fd-ae25-6e09b98341f3.png" alt="close"/></div>'+
                                       ' <ul class="bgpt_social_list">'+
                                        '  <li><a target="_blank" href="https://www.facebook.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_497_2x_de9f3124-6476-42b6-996f-572df3a74784.png" alt="facebook"/></a></li>'+
                                        '  <li><a target="_blank" href="https://twitter.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/Group_499_2x_630a780c-5da5-4bd2-ba13-e11aa1d3a928.png" alt="twitter"/></a></li>'+
                                         ' <li><a target="_blank" href="https://www.instagram.com/hellonyumi/"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/it.png?v=1606469610" alt="pistagram"/></a></li>'+
                                       ' </ul>'+
                                     ' </div>'+
                                   ' </div>'+
                                   ' <div class="bgpt_description">'+full_txt+
                                       // ' <p>'+item.fields.blogContentBody.content[0].content[0].value+'</p>'+
                                    '</div>'+
                                  '</div>'+ 
                                '</div>'+

                              '</div>';

                    if(index < 3){
                      $('#blog_top_list').append(post);
                    }else{
                      $('#blog_bottom_list').append(post);
                    }


                    // category 
                    var cat ='<li data-id="'+item.fields.categoryName+'">'+item.fields.categoryName+'</li>';
                     var addcat = true;
                    $('#blog_cat li').each(function(){
                      if($(this).data('id') == item.fields.categoryName){
                        addcat = false;
                      }
                    });

                    if(addcat){
                     $('#blog_cat').append(cat);
                    }

                    }
            
            
          
        });
          
          
          
      }
      
    }
    
    function redirect_url(value){
      setTimeout(function(){
       $(value.blog).each(function(index, item){
         
           var title = '', slg_title = '';
            if(typeof item.fields.title !== 'undefined'){
              title = item.fields.title;
              slg_title = title.replaceAll(' ', '-');
            }
          
           var current_url = window.location.search;           
           if(current_url.indexOf(slg_title) != -1){
             console.log(current_url);
             
             $('.bgpt_post_detail[data-title="'+title+'"]').show();
          	// window.location.replace('/blogs/news');
             
               $('html, body').animate({
            		scrollTop: $('.bgpt_post_detail[data-title="'+title+'"]').offset().top - 100
        		}, 700);
           }
         
       });
      },500);
    }
    
    var faq_schema = '';
    
    function faq_page(value){
    
      if(typeof value.pageUrl !== 'undefined' && value.pageUrl == window.location.href ){
        
        page_meta_description(value);
        
        $(value.sections).each(function(index, item){
          // banner
          if(index == 0){
            
            var html = '<div class="half">'+
                       '<div class="leftpd banner_text">';
                  if(typeof item.fields.text1 !== ''){
                      html += '<div class="small_text cm_title comcol">'+item.fields.text1.content[0].content[0].value+'</div>';
                  }
             	  if(typeof item.fields.text2 !== ''){
                     html += '<h1 class="banner_heading top_heading">'+item.fields.text2.content[0].content[0].value+'</h1>';
                  }
                        html += '</div>'+
                  '</div>'+
                  '<div class="half">';
            	 if(typeof item.fields.image !== ''){
                     html += '<img src="'+item.fields.image.fields.file.url+'" alt="image">';
                 }
                 html += '</div>';
            
            $('.faq_banner').html(html);
          }
          
          // faq question
           
          if(index == 1 && typeof item.fields.faQsForFaqPage !== 'undefined'){
             
            $(item.fields.faQsForFaqPage).each(function(i, list){
                 var id = list.sys.id;
               
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               faq_question(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
            });
            
            
            
            
            
          }
          
           if(index == 1 && typeof item.fields.faqCategories !== 'undefined'){
             
              $(item.fields.faqCategories).each(function(i, list){
                 var id = list.sys.id;
               
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               faq_Categories(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
            });
             
             setTimeout(function(){
            	$('#faq_cat li:first-child').trigger('click');
               $('#faq_cat').removeClass('active');
               
               var faq_schema_pre = '{ "@context": "https://schema.org",    "@type": "FAQPage",'+
                                     '"mainEntity": [ '+
                   						faq_schema +
	                                 '] },';
               
               $('#schema_data').html(faq_schema_pre);
               
            }, 400);
            
             
           }
          
           
          
          
          
        });
        
      }
    }
    
    function faq_Categories(value,no){
       
      var cat_html = '';
      if(typeof value.title !== 'undefined')
       cat_html = '<li data-order="'+no+'" data-cat="'+value.title+'">'+value.title+'</li>';
      
      $('#faq_cat').append(cat_html);
      
    }
    
    function faq_question(value, no){
             
       var add_calss = '', style='';
       
      if(no == 0){
        add_calss = 'active';
        style = 'style="display:block"';
      }
      var cat = '';
      if(typeof value.faqCategory !== 'undefined')
      cat = value.faqCategory[0].fields.title;
      
        
       var ans = '';
      /*
      $(value.answer.content).each(function(out, cont_out){ 
        $(cont_out.content).each(function(i, cont_inner){
          if(typeof cont_inner.value !== 'undefined'){
           ans +=cont_inner.value;
          }else if(cont_inner.nodeType == 'hyperlink'){
            var url = cont_inner.data.uri;
            if(typeof cont_inner.content[0] !== 'undefined' ){
              var txt = cont_inner.content[0].value;
              ans += '<a href="'+url+'">'+txt+'</a>';
            }
          } 
        }); 
      });
      */
           
      ans = editer_value(value.answer);
      
       var item =  '<div class="product_tab_item '+add_calss+'" data-cat="'+cat+'" data-id="'+no+'">'+
                    '<div class="pdtb_heading">'+value.question+'</div>'+
                      '<div class="pdtb_detail" '+style+'>'+
                        '<p>'+ans+'</p>'+
                      '</div>'+
                    '</div>';
     
      $('#faq_quans').append(item);
      
      // schema
      ans =  ans.replaceAll('"','');
       ans =  ans.replaceAll("'",'');
      ans =  ans.replaceAll('<br/>','');
      faq_schema += '{'+
                      '"@type": "Question",'+
                      '"name": "'+value.question+'",'+
                      '"acceptedAnswer": {'+
                       ' "@type": "Answer",'+
                       '"text": "'+ans+'"'+
                      '} }';
    }
    
    function science_product(value){
      
       if(typeof value.pageUrl !== 'undefined' ){
          
          if(value.pageUrl == window.location.href){
            
            page_meta_description(value);
            
            $(value.sections).each(function(index, item){
              var name = item.fields.title;
            	// banner
              if(name == 'Science Banner'){
               // 
                var image = '';
                var title = '';
                var description = '';
                var mobile_img = '';
                
                
                if(typeof item.fields.image !== 'undefined'){
                   image = item.fields.image.fields.file.url;
                }
                if(typeof item.fields.text1 !== 'undefined'){
                   title = item.fields.text1.content[0].content[0].value;
                }
                if(typeof item.fields.text2 !== 'undefined'){
                   description = item.fields.text2.content[0].content[0].value;
                }
                 
                $('#science_banner h1').html(title);
                $('#science_banner .scbn_txt p').html(description);
                
                console.log(item);
                
                if(typeof item.fields.mobileImage !== 'undefined'){
                  mobile_img = item.fields.mobileImage.fields.file.url;
                }
                
                if(image != '')
                $('#science_banner .scbn_img').append('<img class="desktop_show" src="'+image+'" alt="#"/ >');
                
                if(mobile_img != '')
                $('#science_banner .scbn_img').append('<img class="mobile_show" src="'+mobile_img+'" alt="#"/ >');
                
              }
              
              // ingredients 
              if(name == 'Science - Ingredients'){
                   // title
                if(typeof item.fields.text1 !== 'undefined'){
                  $('#ingredients_section h2').html(item.fields.text1.content[0].content[0].value);
                }
                // description
                if(typeof item.fields.text2 !== 'undefined'){
                  $('#ingredients_section .lft_txt p').html(item.fields.text2.content[0].content[0].value);
                }
                
                // image section
                $(item.fields.contentModuleForSciencePage).each(function(index, item){
                    var id = item.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               science_product_image(entry.fields, index);            
                        }).catch(err => console.log(err));
                    }
                });
               
              }
              
              // Portion
              if(name == 'Portion Control'){
               
                var image = item.fields.image.fields.file.url;
                
                // heading
                if(typeof item.fields.text1 !== 'undefined'){
                 $('#Portion_Control h3.cm_title').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2 !== 'undefined'){
                 $('#Portion_Control .cm_description').html(item.fields.text2.content[0].content[0].value);
                }
                
                // img
                if(typeof item.fields.image !== 'undefined' ){
               	 $('#Portion_Control .control-image').html('<img src="'+item.fields.image.fields.file.url+'"/>');
                }
                
                // textColumnsAndImagesIfAny
                $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
                    var id = list.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                               science_text(entry.fields, i);            
                        }).catch(err => console.log(err));
                    }
                }); 
               
              }
              
              // Expert (Science Page)
              if(name == 'Expert (Science Page)'){
                if(typeof item.fields.text1 !== 'undefined'){
                 $('#hire_exp h2').html(item.fields.text1.content[0].content[0].value);
                }
                
                $(item.fields.contentModuleForSciencePage).each(function(i, list){                 
                  var id = list.sys.id;
                    if(typeof id !== 'undefined'){
                      client
                        .getEntry(id)
                        .then(entry => {
                              science_hire(entry.fields);            
                        }).catch(err => console.log(err));
                    }
                }); 
              }
              
               
              // Expert (Science Page)
              if(name == 'Heart and Science'){
                
                if(typeof item.fields.text1!== 'undefined'){
               		$('#heart_section h3').html(item.fields.text1.content[0].content[0].value);
                }
                if(typeof item.fields.text2!== 'undefined'){
               		$('#heart_section .behind_txt').html(item.fields.text2.content[0].content[0].value);
                }
                if(typeof item.fields.image !== 'undefined'){
               	 $('#heart_section .behind-scienc-image').append('<img src="'+ item.fields.image.fields.file.url+'"/>');
                }
                 
                
                if(typeof item.fields.ctaCallToAction !== 'undefined'){
                     var id = item.fields.ctaCallToAction.sys.id;
                      if(typeof id !== 'undefined'){
                        client
                          .getEntry(id)
                          .then(entry => {
                                science_btn(entry.fields);            
                          }).catch(err => console.log(err));
                      }
                }
                 
              }
              
              
            });
            
          }
       }
    }
    
    function science_btn(value){      
      var txt = value.buttonTextLable;
      var url = value.link.content[0].content[1].data.uri;
      $('#heart_btn').html('<a class="button" id="Science-btn" href="'+url+'">'+txt+'</a>');
    }
    
    function science_hire(value){
       
      var description = '';
      if(typeof value.description !== 'undefined'){
       description = value.description.content[0].content[0].value;
      }
      value.icon.fields.file.url;
      
     var html = '<div class="hrxp_flx">'+
                '<div class="hrxp_icon">';
      if(typeof value.icon !== 'undefined'){
         html += '<div class="hrxp_img"><img src="'+value.icon.fields.file.url+'" alt="#"></div>';
      }
         html +='</div>'+
              '<div class="hrxp_txt">'+
                '<h3>'+value.title+'</h3>'+
                '<div class="hrxp_description">'+
                  '<p>'+description+' </p>'+
                '</div>'+
              '</div>'+
            '</div>'; 
      
      $('#hire_exp .hrxp_outer_flx').append(html);
    }
    
    function science_text(value, no){      
      var heading = '';
      if(typeof value.title !== 'undefined'){
      	heading = '<h3 class="sml_tag">'+value.title+'</h3>';
      }
      
      var description = '';      
      if(typeof value.description !== 'undefined'){
      	description = '<p class="cm_small_txt">'+value.description.content[0].content[0].value+'</p>';
      }
      
      if(no == 2){
        $('#Portion_Control .control-last-section').html(heading+description);
      }else{
        $('#Portion_Control .flx').append('<div class="half center">'+heading+description+'</div>');
      }
      
    }
    
    function science_product_image(value, index){
      
       var descripton = value.description.content[0].content[0].value;
       var icon = '';
       var title = value.title;
      
      if(typeof value.icon !== 'undefined'){
        icon = value.icon.fields.file.url;
      }
      var left = false;
      var class_add = '';
      var order = index+1;
      if(order == 1){
        class_add = 'lft_center';
        left = true;
        
      }else if(order == 2){
         class_add = 'lft_left';
          
      }else if(order == 3){
         class_add = 'lft_right lft_big ryt_fx';
        left = true;
         
      }else if(order == 4){
         class_add = 'lft_left lft_big';
         
      }
      
      var text =  '<div class="lftmtx_txt">'+
                        '<h3>'+title+'</h3>'+
                        '<div class="lftmtx_description">'+
                          '<p>'+descripton+'</p>'+
                        '</div>'+
                      '</div>';
      var img = '<div class="lftmtx_img">';
      				if(icon != ''){
                        img +='<img src="'+icon+'" alt="#"/>';
      				 }
          img += '</div>';
                    
      
       var html = '<div data-id="'+order+'" class="lft_img_txt '+class_add+'"> <div class="lftmtx_flx">';
                if(left){
                  html += text+img;
                }else{
                  html += img+text;
                }      
                    
              html +='</div></div>';
      
      $('#ingredients_img_box').append(html);
    }
    
    function commen_pdp_txt(){
      
      setTimeout(function(){
        client
        .getEntry("5rTTD5zXICRZBKXik3PIZM")
        .then(entry => {
               pdp_txt(entry.fields);            
        })   
      }, 4800);
      
    }
    function pdp_txt(value){
       
      
      $(value.sections).each(function(index, item){
        if(index == 0){
          
          var img = '';
          if(typeof item.fields.image !== 'undefined'){
            img = item.fields.image.fields.file.url;
          }
          var html= '<div class="shipping_img">';
           if(typeof img !== 'undefined')
          	 html +=  '<img src="'+img+'" alt="shipping"/>';
             html += '</div>'+
                     '<div class="shipping_txt">'+
                       '<p>'+item.fields.title;+'</p>'+
                     '</div>';          
          $('#shipping_info').html(html); 
          
        }else if(index == 1){
          if(typeof item.fields.text1 !== 'undefined')
          $('#pdp_icon .pdi_heading').html(item.fields.text1.content[0].content[0].value);
          
          
          var id = item.sys.id;
          if(typeof id !== 'undefined'){
            client
            .getEntry(id)
            .then(entry => {
              pdp_icon_img(entry.fields);            
            }).catch(err => console.log(err));
          }
          
        }else if(index == 2){
          if(typeof item.fields.text1 !== 'undefined')
           $('#pdp_kept .faq_title').html(item.fields.text1.content[0].content[0].value);
                    
          if(typeof item.fields.text2 !== 'undefined'){
            $(item.fields.text2.content[0].content).each(function(i, list){
                 var html ='';
                 html = '<li><span class="inner">'+list.content[0].content[0].value+'</span></li>';
                 $('#pdp_kept .strikeout').append(html);
            });
          }
          
         }else if(index == 3){
           
           if(typeof item.fields.title !== 'undefined')
            $('#why_nyumi h3').html(item.fields.title);
           
           $(item.fields.textColumnsAndImagesIfAny).each(function(i, list){
             
              var id = list.sys.id;
              if(typeof id !== 'undefined'){
                client
                .getEntry(id)
                .then(entry => {
                  pdp_why_nyumi(entry.fields, i);            
                }).catch(err => console.log(err));
              }
             
           });
           
         }
        
      });
    }
    
    function pdp_why_nyumi(value, index){
        
      var img = '', description = '';
      if(value.icon !== 'undefined')
        img = value.icon.fields.file.url;
      if(value.description !== 'undefined')
        description = value.description.content[0].content[0].value;
      
      var html = '<div class="three" data-index="'+index+'">'+
                   '<div class="icon_img">';
             if(img != '' )
          	html += '<img class="res_width1" src="'+img+'" alt="color">';
          	html +=	'</div>'+
                   '<div class="icon_txts white">'+value.title+'</div>'+
                   '<div class="icon_des">'+description+'</div>'+
                '</div>';
      
      $('#why_nyumi .three-icon_box').append(html);
       
    }
    
    function pdp_icon_img(value){
       
      $(value.animatedIconsIfAny).each(function(index, item){
        
        var img = '';
        if(typeof item.fields.imagegif !== 'undefined')
        img = item.fields.imagegif.fields.file.url;
        
        var html = '<div  class="boxes">'+
                     '<div class="icon_img">';
            if(img != '')
        	html +=	'<img class="res_width1" src="'+img+'" alt="color"/>';
            html += '</div>'+
                     '<div class="icon_txt">'+item.fields.label+'</div>'+
                   '</div>';
        $('#pdp_icon .icon_boxes').append(html);
        
      });
      
    }
    
    
    function combo_product(value){   
      
      
      
      if(typeof value.productsIncluded !=='undefined' ){
        
        var url = '';
        if(value.productLink !== 'undefined')
          url = value.productLink.content[0].content[0].value;
        
        var link = window.location.href;
        var  link_first = link.split("?");
          
         if(link_first[0] == url){
             
       // if(url == window.location.href){ 
         product_faq(value); 
          
         //product_image(value);
          
       setTimeout(function(){    
        $(value.productsIncluded).each(function(index, list){
          var id = list.sys.id;
           
          if(typeof id !== 'undefined'){
             client
            .getEntry(id)
            .then(entry => {
               product_ingredients(entry.fields, index+1); 
               product_nonActiveIngredients(entry.fields);  
               nutritional_img(entry.fields);
            }).catch(err => console.log(err));
          }
          
          if(typeof list.fields.productName !== 'undefined'){
            var name = list.fields.productName.content[0].content[0].value;
            combo_ingredients(name, index);
          }           
          
        });
         
      }, 6200);
          setTimeout(function(){
        	slider_int();
          }, 6900);
      }
      
      
      }
       
         
        
       //  combo_ingredients('radiant skin', 'ut care');
       //  commen_pdp_txt();
        
      }
    
    
    function combo_ingredients(name1, no){
      var active= '';
      if(no == 0){
        active='active';
      }
      var html = '<li class="'+active+'">'+name1+'</li>';      	  
      $('.ingredient_combo_menu ul').append(html);
    }
    
     var pd_img = 0;
     function product_video(value, all_img){
       
       
       
      if(typeof value.productVideo !== 'undefined' ){  
        
        $(value.productVideo).each(function(index, item){        
            
          all_img += index
          if(typeof item.fields !== 'undefined'){ 
              var video = '<video width="100%" height="100%" controls disablepictureinpicture controlslist="nodownload"> <source src="'+item.fields.video.fields.file.url+'" type="video/mp4"> </video>';              
            }
          
            if(typeof item.fields.thumbnail !== 'undefined'){             	
                var image_thumb = '<img src="'+item.fields.thumbnail.fields.file.url+'" alt="product image" />';
            }else{
              var image_thumb = '<img src="'+"\/\/cdn.shopify.com\/s\/files\/1\/0412\/3027\/0631\/t\/94\/assets\/video.jpg?v=3256721065610687651682513552"+'" alt="product image" />';
            }
            
             $('#product_slider').append('<div class="slider_itmes">'+video+'</div>');
            
             $('#product_slider_thumb').append('<li data-index="'+pd_img+'" class="slider_thumb">'+image_thumb+'</li>')
            pd_img +=1;
        }); 
        
        var size = ($(value.additionalImagesDetailPage).size()+1)*65;
        $('#product_slider_thumb').css('min-width', size);
        
      }
     
    }
    
    
   
    function product_image(value){
      
       
        var all_img = 0;
      if(typeof value.additionalImagesDetailPage !== 'undefined' ){  
        
       
        $(value.additionalImagesDetailPage).each(function(index, item){        
            
          
          if(typeof item.fields !== 'undefined'){     
            if(item.fields.file.contentType == 'video/mp4'){
              var img = '<video width="100%" height="100%" controls disablepictureinpicture controlslist="nodownload"> <source src="'+item.fields.file.url+'" type="video/mp4"> </video>';
              var image_thumb = '<img src="'+"\/\/cdn.shopify.com\/s\/files\/1\/0412\/3027\/0631\/t\/94\/assets\/video.jpg?v=3256721065610687651682513552"+'" alt="product image" />';
            }else{
             	var img = '<img src="'+item.fields.file.url+'" alt="product image" />';
                var image_thumb = '<img src="'+item.fields.file.url+'" alt="product image" />';
            }
            
             $('#product_slider').append('<div class="slider_itmes">'+img+'</div>');
            
             $('#product_slider_thumb').append('<li data-index="'+pd_img+'" class="slider_thumb">'+image_thumb+'</li>')
          }
          all_img = index;
          pd_img +=1;
        }); 
        
      }
      
       product_video(value, pd_img);
     
    }
    
    
    function run_slider(){
      setTimeout(function(){
        
        $('.product_image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            adaptiveHeight: true
         });
        
      },800);
    }
    
    function nutritional_img(value){
       
       if(typeof value.nutritionalInfo !== 'undefined' ){
         var img = '<div class="nutritional_item"><img src="'+value.nutritionalInfo.fields.file.url+'" alt="#"/></div>';
         $('.show-nutrition .nutrition_flx').append(img);
       }
    }
    function product_detail(value){
      
            if(typeof value.productLink !== 'undefined' ){  
        
         var url = value.productLink.content[0].content[0].value;  
          var link = window.location.href;  
              
          var  link_first = link.split("?");
         // if(link.indexOf(url) != -1){
           if(link_first[0] == url){
            // whyNyumibgColor  
             
          
            
            page_meta_description(value);
            
             product_image(value);
             //product_video(value);
             run_slider();
            
            
             nutritional_img(value);
            
            
            if(typeof value.whyNyumibgColor !== 'undefined' ){
              var style= value.whyNyumibgColor;
              var txt = '<style>.bottom_section{background-color:#'+style+'}</style>';
              $('body').append(txt);
            }            
            
            // commen text all product
            commen_pdp_txt();            
            
            // Purpose
              if(typeof value.productPurpose !== 'undefined' ){
                 $('.product_sub_title').html(value.productPurpose);
              }
              
            // flavour
            if(typeof value.flavour !== 'undefined' ){
              var html = '';
              var label = value.flavour.fields.label;
              var img = value.flavour.fields.imagegif.fields.file.url;
               html = '<img src="'+img+'" alt="orange"/>'+
                      '<div class="pd_sty_txt">'+label+'</div>';
              $('.product_sub_type').html(html);
            }
            
            // Description
            if(typeof value.productDescriptionForDetailPage !== 'undefined' ){
               $('.product-single__description').html(value.productDescriptionForDetailPage.content[0].content[0].value);
            }
            
            //Supply            
             if(typeof value.supply !== 'undefined' ){
               $('.product_tab_heading').html(value.supply);
            }            
            
            // lookForwardTo
            if(typeof value.lookForwardTo  !== 'undefined' ){
              var html = '';
              $(value.lookForwardTo).each(function(index, item){
                var label = '';
                if(typeof item.fields.label !== 'undefined')
                label =item.fields.label;
                
                var img = '';
                
                if(typeof item.fields.imagegif !== 'undefined')
                img = item.fields.imagegif.fields.file.url;
                
                
                html += '<div class="pdtb_item">'+
                        '<div class="pdtb_img">';
                if(img != '')
                html +=   '<img src="'+img+'" alt="#"/>';
                
                html +=  '</div>'+
                        '<div class="pdtb_txt">'+label+'</div>'+
                     ' </div>';
              });
              $('#lookForwardTo .pdtb_flx').html(html);              
            }            
           
            //storeItRight
            if(typeof value.storeItRight  !== 'undefined' ){ 
              var li_html = '';
              $(value.storeItRight.content[0].content).each(function(i, line){
                li_html +=line.value;
              });              
              $('#storeItRight .pdtb_flx').html('<p>'+li_html+'</p>');
            }
            
            //dailyDosage
            if(typeof value.dailyDosage  !== 'undefined' ){
               var li_html = '';
              $(value.dailyDosage.content).each(function(i, line){
                li_html +=line.content[0].value+'<br/>';
              });               
              
              $('#dailyDosage .pdtb_flx').html('<p>'+li_html+'</p>');
            }
            
             setTimeout(function(){
              //ingredients
              if(typeof value.ingredients !== 'undefined' ){
                 product_ingredients(value, 1);              
              }
               $('.ingredient_section').show();
             }, 4200);
                        
            // nonActiveIngredients
             
            setTimeout(function(){ 
              if(value.nonActiveIngredients !== 'undefined' ){
                product_nonActiveIngredients(value);              
                slider_int();
              }
              $('#nonActiveIngredients').show();
            }, 5500);
            
            // faq
            setTimeout(function(){ 
              if(value.gotDoubtsFaQs !== 'undefined' ){
                product_faq(value);             
              }
              $('#why_nyumi').show();
              
            }, 6200);
             
            
             setTimeout(function(){ 
            	if(value.gotDoubtsImages !== 'undefined' ){
              var html_style = '';
              $(value.gotDoubtsImages).each(function(index, item){
                if(typeof item.fields.file.url !== 'undefined'){
              	   var img = item.fields.file.url;
                  if(index == 0){
                    html_style += '.faq_section:before{background-image:url('+img+')}';
                  }else{
                    html_style += '.faq_section:after{background-image:url('+img+')}';
                  }
                  
                }
                
              });
               $('#product_faq').append('<style>'+html_style+'</style>');
              
            }
               $('#product_faq, #nutritionInfo, #pdp_kept, .product-reviews-section').show();
            }, 6600);
          }
      }
    }
    
    var faq_count = 0;
    
    function product_faq(value){
       var html = '';
       var product_faq = '';
      
        $(value.gotDoubtsFaQs).each(function(index, item){
                
                 var question = '';
                 var answer = '';
                 
                if(typeof item.fields.question !== 'undefined'){
                   question = item.fields.question;
                }                
                if(typeof item.fields.answer !== 'undefined'){
                   answer = item.fields.answer.content[0].content[0].value;
                }  
                var add_calss = '';
                var style= '';
                 if(faq_count == 0){
                  add_calss = 'active';
                  style = "style='display:block'";
                }
                 
                html +=  '<div class="product_tab_item '+add_calss+'" data-id="'+faq_count+'">'+
                          '<div class="pdtb_heading">'+question+'</div>'+
                            '<div class="pdtb_detail"' +style+'>'+
                              '<p>'+answer+'</p>'+ 
                           '</div>'+
                          '</div>';   
               
          	    faq_count +=1;
          
          		// ld+json 
             
          		product_faq += '{ "@type": "Question", "name": "'+question+'",'+
                                  '"acceptedAnswer": { "@type": "Answer", "text": "'+question+'" } },';
        
              }); 
        $('#product_faq .ac-container').html(html); 
       
         product_faq = product_faq.slice(0,-1);
         product_faq = '{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": ['+product_faq+'] }';

      
        $('#product_faq_json').html(product_faq);
      
    }
    
    function product_nonActiveIngredients(value){
      var html = '';
      $(value.nonActiveIngredients).each(function(index, item){                 

        var name = '';
        if(item.fields.name !== 'undefined'){
          name = item.fields.name;
        }
        var sourceLocation = ''; 
        var image = '';
        var description =  '';

        if(typeof item.fields.sourceLocation !== 'undefined' ){
          sourceLocation = item.fields.sourceLocation; 
        }
        if(typeof item.fields.image !== 'undefined' ){
          image = item.fields.image.fields.file.url;
        }
        if(typeof item.fields.description !== 'undefined' ){
          description =  item.fields.description.content[0].content[0].value;
        }

        html += '<li>';
        if(image != '')
          html += '<img src="'+image+'" alt="#">';                   
        html +='<h4>'+name+'</h4>'+
          '<p>'+description+'</p>';
        if(sourceLocation != '')
          html +='<span class="component_location"><img src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/map-black.png" alt="#"/>'+sourceLocation+'</span>';
        html +='</li>';                
      });

      $('#nonActiveIngredients .component_slider').append(html);
      
    }
    
    function product_ingredients(value, type){
          var list_html = '';
          var detail_html = '';
              $(value.ingredients).each(function(index, item){
                 var name = item.fields.name;
                 var img = '';
                 var description = '';
                 var active = '';                  
                if(index == 0){
                  active= 'active';
                }
                
                if(typeof item.fields.image !== 'undefined' ){
                  img = item.fields.image.fields.file.url;
                }
                if(typeof item.fields.description !== 'undefined' ){
                  description = item.fields.description.content[0].content[0].value;
                }
                
                 list_html +=  '<li class="'+active+'">';
                 if(img != '')
                   list_html +=  '<img src="'+img+'" alt="#">';                
                  list_html += '<span>'+name+' <img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/arrow-right.png?v=57770472121948948791682513552" alt="#"></span></li>';                 
                 detail_html += '<li class="'+active+'">';
                 if(img != '')
                  detail_html += '<img src="'+img+'" class="ing-image" alt="#">';
                  detail_html += '<h4>'+name+'</h4>';
                  if(description != ''){
                    detail_html += '<p>'+description+'</p>';
                  }
                  detail_html += '</li>';
              });
              
              $('#ingredients .content_wrapper[data-id="'+type+'"] .vertical-scroller').html(list_html);
              $('#ingredients .content_wrapper[data-id="'+type+'"] #fade-sliders').html(detail_html);
      }
    
    
    
      function footer_menu_left(value){
        $(value.menuItems).each(function(index, item){
          var name = item.fields.buttonTextLable;
          var url = '';
           
          if(typeof item.fields.link !== 'undefined' ){
            if( typeof item.fields.link.content[0].content[1] !== 'undefined'){
               url = item.fields.link.content[0].content[1].data.uri;
            }else{
               url = item.fields.link.content[0].content[0].value;
            }
          }
      
          var html = '<li><a href="'+url+'"> '+name+' </a>  </li>';
           $('#footer1_section #footer_menu_left').append(html);
          
        });
      }
    
    function footer_menu_right(value){
        $(value.menuItems).each(function(index, item){
          var name = item.fields.buttonTextLable;
          var url = '';
           
          if(typeof item.fields.link !== 'undefined' ){
            if( typeof item.fields.link.content[0].content[1] !== 'undefined'){
               url = item.fields.link.content[0].content[1].data.uri;
            }else{
               url = item.fields.link.content[0].content[0].value;
            }
          }
      
          var html = '<li><a href="'+url+'"> '+name+' </a>  </li>';
           $('#footer1_section #footer_menu_right').append(html);
          
        });
      }
    
    
    function footer_section(value){
       
      // left section 
      var address = value.address.content[0].content[0].value;
      var email = value.emailAndPhoneNumber.content[0].content[0].value;
      var logo = value.nyumiLogo.fields.file.url;
      var logo_alt = value.nyumiLogo.fields.description;
      
      
      var html =   '<div class="footer_logo"><img src="'+logo+'" alt="'+logo_alt+'"></div>'+
                    '<div class="desktop"><p>'+address+'</p></div>'+	
                     '<div class="desktop">'+
                      '<strong><span class="nameset first1">'+email+'</span></strong>'+
                    '</div>';
      var mobiile_email = '<strong><span class="nameset first1">'+email+'</span></strong>';
      
      $('.mobile_email').html(mobiile_email);
        
      $('#footer1_section #address_box').html(html); 
       
    }    
    
    
    function header_section(value){ 
      //announcement bar
       var announcement = value.announcementBanner.content[0].content[0].value;      
       var html = '<p class="announcement-bar__message">'+announcement+'</p>';
       $('#announcement_bar').html(html);
      
      // header menu 
     
      var menu = value.headerMenu.fields.menuItems;
      $(menu).each(function(index, item){
        
          var id = item.sys.id;
                if(typeof id !== 'undefined'){ 
                   client
                    .getEntry(id)
                    .then(entry => {
                             header_menu(entry.fields, index);            
                      }).catch(err => console.log(err)); 
                }
           }); 
    }
    
    function header_menu(value, no){
       
       var name = value.buttonTextLable;
       var url = value.link.content[0].content[0].value;
      if(typeof value.link.content[0].content[1] !== 'undefined'){
         url = value.link.content[0].content[1].data.uri;
      }else{
         url = value.link.content[0].content[0].value;
      }
      
      var active = '', relative= 'no_hover_img'; 
      if(url == window.location.href){
        active = 'site-nav--active';
      }
      var order = 10; 
      if(name == 'shop'){
        order = 1;
        relative = '';
      }else if( name == 'story'){
        order = 2;        
      }
     order = no;
      // desktop menu
      var menu= '<li class="'+relative+'" data-order="'+order+'" ><a href="'+url+'" class="site-nav__link site-nav__link--main '+active+'">'+
                  '<span class="site-nav__label">'+name+'</span>'+
                '</a>';
      
         // product menu 
          if(typeof value.productAssignedIfAny !== 'undefined'){
            
             menu += '<div class="site_mega_menut"> <ul>';
             $(value.productAssignedIfAny).each(function(index, item){
                
                var hover = '', img = '', link = '', name= '';
               
                if(typeof item.fields.productLink.content[0].content[1] !== 'undefined'){
                     link = item.fields.productLink.content[0].content[1].data.uri;
                  }else{
                     link = item.fields.productLink.content[0].content[0].value;
                  }
               
                  if(typeof item.fields.productName !== 'undefined'){
                    name = item.fields.productName.content[0].content[0].value;
                  }else if(typeof item.fields.comboName !== 'undefined'){
                    name = item.fields.comboName;
                  }
                
              	 if(typeof item.fields.comboName !== 'undefined' && typeof item.fields.productImageForHeaderMenu !== 'undefined' ){
                    img = item.fields.productImageForHeaderMenu.fields.file.url;                   
                 }else if(typeof item.fields.productImage !== 'undefined'){
                    img = item.fields.productImage.fields.file.url;
                 }
               
                  if(typeof item.fields.productImageForHeaderMenu !== 'undefined' && typeof item.fields.comboName === 'undefined'){                    
                      hover = item.fields.productImageForHeaderMenu.fields.file.url;                   
                  }
                
                menu += '<li class="mega_items "  data-hover="'+hover+'">';
                    if(hover)
                      menu += '<div class="mega_items_hover" style="background-image:url('+hover+')"></div>';
                
                    menu +=  '<a class="'+active+'_new" href="'+link+'">';
                    if(img != '')
                    menu += '<img src="'+img+'" alt="#"/>';
                    menu += '<span class="mega_txt"> <span class="mega_txt_style">'+name+'</span> <span class="menu_sign"> > </span> </span>'+
                        '</a>'+
                     '</li>';
               
             });
             menu +=  '</ul> </div>';
          }
         // normal image
         else if(typeof value.submenusbuttons !== 'undefined'){
              
            menu += '<div class="site_mega_menut"> <ul>';
             
        	     
            $(value.submenusbuttons).each(function(index, item){ 
               
               var link = '';                
                if(typeof item.fields.link.content[0].content[1] !== 'undefined'){
                     link = item.fields.link.content[0].content[1].data.uri;
                  }else{
                     link = item.fields.link.content[0].content[0].value;
                  }
                    active = '';
                   if(link == window.location.href){
                      active = 'site-nav--active';
                    }
              
               var a = 'ingredients.png';
               var b = 'about.png';
              
              // menu
               var img = '', hover='';
                
              		/*
                    if(item.fields.buttonTextLable== 'Ingredients'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/ingredients.png?v=68284707682751100621682513552';   
                    } else if(item.fields.buttonTextLable== 'Science'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/science.png?v=140547661855125755751682513552'; 
                    } else  if(item.fields.buttonTextLable== 'About'){
                         img= '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/about.png?v=140087271171188008681682513552';
                    }else  if(item.fields.buttonTextLable== 'skin'){  
                      img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-01.png?v=70321680026849546931682513552';
                      hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/Skin_icon.png?v=8798128366405522401682513552';
                     }else if(item.fields.buttonTextLable== 'sleep'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-02.png?v=106027680925421685811682513552';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/Sleep_Icon.png?v=130030158599845727431682513552';
                     }else if(item.fields.buttonTextLable== 'immunity'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-05.png?v=85405605534512633741682513552';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/Immunity_Icon.png?v=122082383887061141401682513552';
                     }else if(item.fields.buttonTextLable== 'uti'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-04.png?v=2432197703919416331682513552';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/UTI_icon.png?v=57958794406455294291682513552';
                     }else if(item.fields.buttonTextLable== 'hair & nails'){
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-03.png?v=154247179845821094391682513552';
                       hover='//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/Hair_Icon.png?v=169729995983690088441682513552';
                     }else{
                       img = '//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/p-01.png?v=70321680026849546931682513552';
                     }
              		*/		
             
              
              
              if(typeof item.fields.imageIfNeeded !== 'undefined'){
                img = item.fields.imageIfNeeded.fields.file.url;                
              }
              
              if(order !=1){
                  menu += '<li class="mega_items " > <a href="'+link+'" class="'+active+'_new">';
                           
                   if(img != '')
                     menu += '<img src="'+img+'" alt="#"/>';   
                    
                   menu +=  '<span class="mega_txt"> <span class="mega_txt_style">'+item.fields.buttonTextLable+'</span> <span class="menu_sign"> > </span> </span></a>  </li>';
              }else{
                    
                    menu += '<li class="mega_items "  data-hover="'+hover+'">';
                    if(hover)
                      menu += '<div class="mega_items_hover" style="background-image:url('+hover+')"></div>';
                 
                    menu +=  '<a class="'+active+'_new" href="'+link+'">';
                    if(img != '')
                    menu += '<img src="'+img+'" alt="#"/>';
                    menu += '<span class="mega_txt"> <span class="mega_txt_style">'+item.fields.buttonTextLable+'</span> <span class="menu_sign"> > </span> </span>'+
                        '</a>'+
                     '</li>';
              }
              
            });
            
            menu +=  '</ul> </div>';
             
          }
      
          menu +='</li>';
      $('#menu_list').append(menu);
      
      // mobile menu 
      var menu_name = 'shop';
      var active_submenu = '';
      var class_name='';
      if(menu_name == name){
        class_name = 'active';
        active_submenu = 'style="display:block"';
      }
      		
      var mobile_menu = '<li data-order="'+order+'" class="mobile-nav__item ">';
                   if(typeof value.submenusbuttons !== 'undefined'){
                      mobile_menu +=  '<button type="button" class="btn--link mobile_child_item mobile-nav__link '+class_name+'" data-target="menu-'+no+'"  data-level="1" aria-expanded="false">'+
                        '<span class="mobile-nav__label">'+name+'</span>'+
                         '<div class="mobile-nav__toggle">'+
                          '<img class="plus_img" src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/plus.png?v=19405718348818129421682513552" alt="plus">'+
                          '<img class="minis_img" src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/minis.png?v=14085178808061018951682513552" alt="minis">'+
                        '</div>'+
                      '</button>'+
                    '<ul class="mobile-nav__dropdown" data-parent="menu-'+no+'" data-level="2" '+active_submenu+'>';
                     
                     if(order == 0){
                        mobile_menu += '<li class="mobile-nav__item">'+
                                  '<a href="'+url+'" class="mobile-nav__sublist-link">'+                                  
                                    '<span class="mobile-nav__label">'+name+' all</span>'+
                                  '</a>'+
                               '</li>';
                     }
                     
                      $(value.submenusbuttons).each(function(index, item){
                         var link = '';
                         

                          if(typeof item.fields.link.content[0].content[1] !== 'undefined'){
                               link = item.fields.link.content[0].content[1].data.uri;
                            }else{
                               link = item.fields.link.content[0].content[0].value;
                            }
                        mobile_menu += '<li class="mobile-nav__item">'+
                                  '<a href="'+link+'" class="mobile-nav__sublist-link">'+                                  
                                    '<span class="mobile-nav__label">'+item.fields.buttonTextLable+'</span>'+
                                  '</a>'+
                               '</li>';
                      });
                     
                  mobile_menu += '</ul>';
                   }else{
              		 mobile_menu += '<a href="'+url+'" class="mobile-nav__link">'+
                            '<span class="mobile-nav__label">'+name+'</span>'+
                          '</a>'+
                      '</li>';
                   }
      
     $('#MobileNav').append(mobile_menu); 
    }
    
    function collection_page(value){
     
      var url = value.pageUrl;
       
      if(url == window.location.href){ page_meta_description(value); }
      
         // banner
        var banner = value.sections[0];
        var img_url = banner.fields.image.fields.file.url;
        var text1 = banner.fields.text1.content[0].content[0].value;
        var text2 = banner.fields.text2.content[0].content[0].value;
       
         var html=  '<img src="'+img_url+'">'+
                     '<div class="absolute">'+
                      '<div class="banner_text">'+
                        '<div class="small_text center cm_title comcol">'+text1+'</div>'+
                        '<h1 class="banner_heading center top_heading">'+text2+'</h1>	'+
                     '</div>'+
                     '</div>';
        
            $('#collectino_banner').html(html);
        
          // fotter section 
          var banner = value.sections[1];
          var title = banner.fields.title;
      
       setTimeout(function(){
      
         coll_sort_description();
         
         //$('#Collection').show();
       },3900);
      
      setTimeout(function(){
        
          $('#coll_btm_section h3').html(title);
          
          $(banner.fields.textColumnsAndImagesIfAny).each(function(index, item){
               var id = item.sys.id;
                if(typeof id !== 'undefined'){
                  
                   client
                    .getEntry(id)
                    .then(entry => {
                             collection_bottom(entry.fields, index);            
                      })       
                        .catch(err => console.log(err));
                   
                }
           });
        
      },6000);
        
        
        
      
    }
    function coll_sort_description(){
      
      // home page product 
       client.getEntry('7FTjrOg7iLj4JrmQaC56WO')
         .then(entry => {
           add_sort_description(entry.fields);            
         }).catch(err => console.log(err));
      
    }
    function add_sort_description(value){
       
      $(value.productFeaturedIfAny).each(function(index, item){
        var url = item.fields.productLink.content[0].content[0].value;
        var st_html = '';
        if(typeof item.fields.shortDescriptionForListingPage.content[0].content[0].value !== 'undefined'){
          st_html = item.fields.shortDescriptionForListingPage.content[0].content[0].value;
        }
        $('.product_description[data-url="'+url+'"]').html(st_html);
        
        
        
        if(typeof item.fields.listingPageImage !== 'undefined'){
          var img =  item.fields.listingPageImage.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('img.grid-view-item__image')
          			.attr('src', img)          			 
          			.removeAttr('srcset');
        }
        
        if(typeof item.fields.listingPageIcon !== 'undefined'){
          var icon_img =  item.fields.listingPageIcon.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('.prdocut_icon')
          	.html('<img src="'+icon_img+'"/>');
        }
        
      }); 
    }
    
    
     function add_bundle_description(value){
        
       var url = value.productLink.content[0].content[0].value;
        
       if(typeof value.listingPageImage !== 'undefined'){
          var img =  value.listingPageImage.fields.file.url;
          
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('img.grid-view-item__image')
          			.attr('src', img)          			 
          			.removeAttr('srcset');
        }
        
        if(typeof value.listingPageIcon !== 'undefined'){
          var icon_img =  value.listingPageIcon.fields.file.url;
          $('.product_description[data-url="'+url+'"]').closest('.product-card').find('.prdocut_icon')
          	.html('<img src="'+icon_img+'"/>');
        }
        
       
    } 
    
    
    
    function collection_bottom(valu, index){
      
      
        var title = valu.title;
        var description = valu.description.content[0].content[0].value;
        var icon = valu.icon.fields.file.url;

        var html = '<div class="three" data-index="'+index+'">'+
                     '<div class="icon_img"><img class="res_width1" src="'+icon+'" alt="color"></div>'+
                     '<div class="icon_txts white">'+title+'</div>'+
                     '<div class="icon_des">'+description+'</div>'+
                   '</div>';
        $('#coll_btm_box').append(html).show();
        
        $('#coll_btm_section').show();
       
      
    }
    
    
    function Product_section(value){  
       
      $('#product_section').hide();
      if(value.sectionVisible){
        
        setTimeout(function(){
          var heading =  value.text1.content[0].content[0].value;
          add_muli_product(value);
          $('#product_section #product_heading').html(heading); 
           
          
        }, 6000);
        
          setTimeout(function(){ 
            $('#product_section').show();
             nyumi_api.slder_product();
           },7200);
      }
       
    }
    
    function product_icon(value, index){
       
	  var item = '<div class="pdil_itmes" data-index="'+index+'">'+
                  '<div class="pdil_img">';
      				if(typeof value.imagegif !== 'undefined')
                  	item +='<img src="'+value.imagegif.fields.file.url+'" alt="'+value.imagegif.fields.description+'"/>';
                item += '</div>';
      		if(typeof value.label !== 'undefined'){
                var str =  value.label.substr(0,13);
                //str +='..';
                item += '<div class="pdil_txt">'+value.label+' </div>';
             }
             item += '</div>';
      return item;
    }
    
    function add_muli_product(value){
    /*
     var icon =  '<div class="product_icon_li">'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/s-01.png?v=5951547802039784641682513552" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt"> Restful Sleep </div>'+
                      '</div>'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/s2.png?v=166658742542489904601682513552" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt">Skin Repair</div>'+
                      '</div>'+
                      '<div class="pdil_itmes">'+
                        '<div class="pdil_img">'+
                         '<img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/s3.png?v=143646789359622602311682513552" alt="#"/>'+
                        '</div>'+
                        '<div class="pdil_txt">Reduces Fatigue</div>'+
                      '</div>'+
                    '</div> ' ;  
      
       */
      
      $(value.productFeaturedIfAny).each(function(index, item){  
        var html = '';  
        var productCategory = '';
        var img = '', img_alt='';
        var url = '';        
         if(index > 4){
          $('.show_more_product').addClass('active');
        }
       
          var icon = ''; 
        $(item.fields.benefitIconsForHomepageProductSection).each(function(i, line){         
           var id = line.sys.id;
           
           if(typeof id !== 'undefined'){                  
             client
             .getEntry(id)
             .then(entry => {
              icon = product_icon(entry.fields, i);  
               
               if(icon != ''){                  
                  $('#product_section #product_add_item .pdhm_itme[data-index="'+index+'"] .product_icon_li').append(icon); 
                } 
               
             }).catch(err => console.log(err));  
             
              
           }

        });
        
         
        
        var style = '';
        // gummyImagesforHome
        $(item.fields.gummyImagesforHome).each(function(i, list){          
          if(typeof list.fields.file.url !== 'undefined'){
             var gn = i +1;            
             style += '.product_section_outer[data-val="'+index+'"] .pdhm_gummy.pdhm_gummy_'+gn+':before {'+
                        'background-image: url('+list.fields.file.url+');'+
                    '}';
            
              style +='@media only screen and (max-width: 768px){ .product_section_outer .pdhm_itme[data-index="'+index+'"] .pdhm_gummy.pdhm_gummy_'+gn+':before {'+
                        'background-image: url('+list.fields.file.url+');'+
                      '} }';
             // bottom gummy
            if(i == 0){
              style += '.product_section_outer[data-val="'+index+'"] .page_width:after {'+
                          'background-image: url('+list.fields.file.url+');'+
                        '}';
              
              style += '.product_section_outer .pdhm_itme[data-index="'+index+'"]:after {'+
                          'background-image: url('+list.fields.file.url+');'+
                        '}';
            }
          }          
        });
        
        var img_add = '';
        // backgrond          
        if(typeof item.fields.backgroundImageforHomePage !== 'undefined'){
            style += '.product_section_outer[data-val="'+index+'"]:before {'+
                          'background-image: url('+item.fields.backgroundImageforHomePage[0].fields.file.url+');'+
                      '}';
          
            style += '.pdhm_itme[data-index="'+index+'"]:before {'+
              			 'background-image: url('+item.fields.backgroundImageforHomePage[0].fields.file.url+');'+
                      '}';
           img_add = '<div class="bg_img"><img src="'+item.fields.backgroundImageforHomePage[0].fields.file.url+'" alt=""/></div>';
        }        
        $('#product_section_style').append(style);
        
        $('.hide_img_section').append(img_add);
        
        
        if(typeof item.fields.productImage.fields.file.url !== 'undefined'){           
          img = item.fields.productImage.fields.file.url;
          if(typeof item.fields.productImage.fields.description !== 'undefined')
           img_alt = item.fields.productImage.fields.description;
        }
        
        productCategory = item.fields.productCategory;
        var productName = item.fields.productName.content[0].content[0].value;
        var productDescription= ''; 
        if(typeof item.fields.productLink !== 'undefined' )
        url = item.fields.productLink.content[0].content[0].value;
         
        if(typeof item.fields.productDescription !== 'undefined')
          productDescription = item.fields.productDescription.content[0].content[0].value;
                                                               
        html  = '<div class="pdhm_itme" data-index="'+index+'"><a class="url_btn_style" href="'+url+'"></a>'+ 
                '<div id="product_items" class="product-items">'+ 
          '<div class="productName" style="color:'+item.fields.productTitleColorforHomepage+'">'+productName+'</div>'+
                '<div class="productDescription">'+productDescription+'</div>'+
                '<div class="product_icon_li"></div>'+          		 
                '<a class="btn_style_pd" href="'+url+'">shop </a>'+
                '</div>'+
                '<div class="big_img_box">'+
                '<div class="pdhm_gummy pdhm_gummy_1"></div>'+
          		'<div class="pdhm_gummy pdhm_gummy_2"></div>'+
          		'<div class="pdhm_gummy pdhm_gummy_3"></div>';
        if(img !=''){
          html  +=  '<img class="big_img_slider"  src="'+img+'" alt="'+img_alt+'"/>';
        }
         html  +=     '</div>';                                                      
                                                               
       $('#product_section #productCategory').append('<div class="category_item" data-item="'+index+'">'+productCategory+'</div>');
       $('#product_section #product_add_item').append(html); 
      
       
        
      });
      
      
    }
    
    function Purpose_section(value){
      
      $('#Purpose').hide();
      
      if(value.sectionVisible){        
        setTimeout(function(){
         
              var heading = value.text1.content[0].content[0].value;
              var subheading = value.text2.content[0].content[0].value;

              subheading = editer_value(value.text2);
             // subheading = subheading.replace("<br>", " ");
              var description = '';
              $(value.text3.content).each(function(index, item){
                var next_line = '';
                if(index !=0){  next_line = ' '; }
                description += next_line +item.content[0].value;
              });


              var text = value.text4.content[0].content[0].value;
              var btn = value.ctaCallToAction.fields.link.content[0].content[1].content[0].value;
              var url = value.ctaCallToAction.fields.link.content[0].content[1].data.uri;

              // add text
              $('#Purpose #Purpose-heading').html(heading);
              $('#Purpose #Purpose-subheading').html(subheading);
              $('#Purpose #Purpose-description').html(description);
              $('#Purpose #Purpose-text').html(text);
              $('#Purpose #Purpose-button').html(btn);
              $('#Purpose #Purpose-button').attr('href', url);  

              // box icon

              $(value.animatedIconsIfAny).each(function(index, item){

                var img = '', img_alt='#';
                if(typeof item.fields.imagegif !== 'undefined'){
                    img = item.fields.imagegif.fields.file.url;

                if(typeof item.fields.imagegif.fields.description !== 'undefined')
                    img_alt = item.fields.imagegif.fields.fields.description;
                }

                var html = '<div  class="boxes">'+
                             '<div class="icon_img gif_icon_'+index+' ">';
                      if(img != '')
                        html += '<img class="res_width1" src="'+img+'"  alt="'+img_alt+'"/>';
                      html += '</div>'+
                                '<div class="icon_txt">'+item.fields.label+'</div>'+           
                           '</div>';

                $('#hm_icon_boxes').append(html);
              });
        
       $('#Purpose').show();
       }, 5600);
        
      } 

    }
    
    function top_section(value){ 
      
      if(window.location.href == 'https://nyumi.com/'){
         client
        .getEntry("4V8IL5wRm9xy2tjarNeza8")
        .then(entry => {      
              page_meta_description(entry.fields);            
        }).catch(err => console.log(err));
      }
      
      if(!value.sectionVisible){
        $('#top_section').hide();
      }
      
      $(value.bannersForCarousel).each(function(index, item){
        var img = '';
        if(typeof item.fields.bannerImage !== 'undefined' ){
         img = item.fields.bannerImage.fields.file.url;
        }
        var img_alt = '';
         if(typeof item.fields.bannerImage.fields.description !== 'undefined' ){
         img_alt = item.fields.bannerImage.fields.description;
        }
        
        var desktop_img = '';
         if(typeof item.fields.bannerImageDesktop !== 'undefined' ){
         desktop_img = item.fields.bannerImageDesktop.fields.file.url;
        }
        
        var desktop_img_alt = '';
         if(typeof item.fields.bannerImageDesktop.fields.description !== 'undefined' ){
         desktop_img_alt = item.fields.bannerImageDesktop.fields.description;
        }
         
                 
        var txt1 = item.fields.title;
        
        var txt2 ='';
        if(typeof item.fields.bannerText !== 'undefined' )
          $(item.fields.bannerText.content).each(function(i, line){
            if(i == 0)
            var next_line = '';
            else
            var next_line = '<br/>';

            txt2 += next_line+line.content[0].value;        
          });
       
        
        if(typeof item.fields.button !== 'undefined'){
            client
            .getEntry(item.fields.button.sys.id)
            .then(entry => {
                   sldier_button(entry.fields, index);            
            }).catch(err => console.log(err));
        }
        
        
        
         var html= '<div class="item_top"><div class="top_section_flx"><div class="top_section_txt" data-index="'+index+'">'+
      			 '<div id="banner_heading" class="top_heading">'+txt1+'</div>'+
     			 '<div id="banner_subheading" class="top_sunheading">'+txt2+'</div>'+      				 
    			 '</div>'+
                  '<div class="top_section_img">';
        
             if(desktop_img !='' && $(window).width() > 769)
             html += '<div id="banner_img" class="desktop_img"><img src="'+desktop_img+'" alt="'+desktop_img_alt+'"></div>';
            if(img !='' && $(window).width() <= 769)
             html += '<div id="banner_img" class="mobile_img"><img src="'+img+'" alt="'+img_alt+'"></div>';
        
             html += '</div></div></div>';
        
      	$('#top_section_slider').append(html);
        
      });
      
       
      // add html
         
       
    }
    
    
    function sldier_button(value, index){
       
      var url = value.link.content[0].content[0].value;
      var txt = value.buttonTextLable;
      
      var html = '<a href="'+url+'" id="banner_btn" class="top_btn_style button">'+txt+'</a>';
      
      $('.top_section_txt[data-index="'+index+'"]').append(html);
    }
    
    function top_slider(){
      setTimeout(function(){
//         $('.flx_slider_top').slick({
//           dots: true,
//           infinite: true,
//           arrows: false,  
//           speed: 300,
//           slidesToShow: 1,
//           autoplay: false,
//   		  autoplaySpeed: 2000,
//           speed: 800,
//         });
      },300);
    }
    
    function Science_section(value){  
      
       $('#Science').hide();
     if(value.sectionVisible){
	  
       setTimeout(function(){
         
            var heading = value.text1.content[0].content[0].value;      
            var subheading = value.text2.content[0].content[0].value; 
            var text = value.text3.content[0].content[0].value; 
            var btn = value.ctaCallToAction.fields.link.content[0].content[1].content[0].value;
            var url = value.ctaCallToAction.fields.link.content[0].content[1].data.uri;
            var img = '', img_alt = '';

            if(typeof value.image !=='undefined'){
              img = value.image.fields.file.url;
              if(typeof value.image.fields.description !=='undefined'){
                img_alt = value.image.fields.description;
              }
            }

            // add text
            $('#Science #Science-heading').html(heading);
            $('#Science #Science-subheading').html(subheading);
            $('#Science #Science-description').html(text);
            $('#Science #Science-text').html(text);
            $('#Science #Science-btn').html(btn);
            $('#Science #Science-btn').attr('href', url);  

            if(img != ''){
              $('#Science .imgtextani').prepend('<img src="'+img+'" alt="'+img_alt+'"/>');
            }

            if(typeof value.scienceImage !=='undefined'){
              var bg_img = value.scienceImage.fields.file.url;
              var html = '<style>.Science_section:after{background-image: url('+bg_img+');}<style>';
              $('body').append(html);
            }
         
         $('#Science').show();
         
        }, 7900);
       
      }
      
    }
    
    function Testimonial_section(value){ 
      
      $('#Testimonial').hide();
     if(value.sectionVisible){
        
       setTimeout(function(){

          var heading = value.text1.content[0].content[0].value;
            // add text
          $('#Testimonial #Testimonial-heading').html(heading);
          inner_Testimonial(value);
          inner_Testimonial(value);
          testimonial_slider();
          $('#Testimonial').hide();
       }, 8300);
       
     } 
       
    }
    
    var test_prd = 0 ;
    function inner_Testimonial(value){
       $(value.reviews).each(function(index, item){
          var reviews = item.fields.reviewerDescription.content[0].content[0].value;
          var Name = item.fields.reviewerName;
          var img = item.fields.reviewerImage.fields.file.url;
          var Quote = item.fields.reviewerQuote.content[0].content[0].value; 
          var img_alt = item.fields.reviewerImage.fields.description;
          
         if(typeof item.fields.productImageForReviews !== 'undefined' ){
           var hover_img = item.fields.productImageForReviews.fields.file.url;
           var hover_img_alt = item.fields.productImageForReviews.fields.description;
           $('#test_hover_img').append('<div class="test_prd" data-count="'+test_prd+'"><img src="'+hover_img+'" alt="'+hover_img_alt+'"/></div>');
         }
        
         test_prd +=1;
         
         var html = ''
          html = '<div class="slider_content">'+
                   '<div id="Testimonial-Quote" class=semi-bold-content>'+Quote+'</div>'+
                   '<div id="Testimonial-Name" class="writer">'+Name+'</div>'+
                   '<div id="Testimonial-reviews" class="designation">'+reviews+'</div>'+               
                  '</div>'; 

          $('#testimonial_item').append(html);
          
          // menu 
          var nav = '<div class="imgbox">'+
                         '<div id="Testimonial-img"> <img src="'+img+'" alt="'+img_alt+'"> </div>'+
                    '</div>'; 
           $('#Testimonial #testimonial_nav').append(nav); 
        
      }); 
    }
    
    function Press_section(value){
      
      $('#Press').hide();
      if(value.sectionVisible){
        
        setTimeout(function(){
          
          var heading = value.text1.content[0].content[0].value;      
          $(value.pressMentionsIfAny).each(function(index, item){         
           // var title = item.fields.title;
            var img = item.fields.pressLogo.fields.file.url;
            var img_alt = item.fields.pressLogo.fields.description;
            var txt = item.fields.pressMentionText.content[0].content[0].value;        
             $('#Press #Press_txt').append('<div class="cm_p min-center">'+txt+'</div>');
             $('#Press #Press_logo').append('<div class="three"">'+'<img class="res_width1" src="'+img+'" alt="'+img_alt+'"/>'+'</div>');
          });      
          $('#Press #Press_heading').html(heading); 
          
          $('#Press').show();
          
        }, 7200);
        
     }
      
    }
     
     
  },
  slder_product: function(){
    
   setTimeout(function(){ 
     
//     var $slider  = $('.pdhome_flx');
//     var width = $(window).width();
     
//     if(width > 769){
//        // prroduct slider
//        $slider.slick({
//           infinite: true,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 400,
//           dots: false,           
//         }).on('afterChange', function(event, slick, currentSlide, nextSlide){
//    			nyumi_api.change_color(currentSlide);
// 		});
      
//     }else{
//       if($slider.hasClass('slick-initialized')) {
//            $slider.slick("unslick");
//         }
//       //$('.pdhome_flx .pdhm_itme[data-index="4"], .pdhome_flx .pdhm_itme[data-index="3"]').addClass('hide_mobile_list');
//     }
     
//      $('.product_Category_item .category_item[data-item="0"]').addClass('active');
     
//      $('.icon_box_text .three:eq(0)').addClass('active');
     
   }, 300);
    
     $('body').on('click', '.pdhome_flx .slick-arrow', function (e) {
        var current = parseInt($(this).closest('.pdhome_flx').find('.pdhm_itme.slick-active').attr('data-index'));
       
       if($(this).hasClass('slick-next')){
         //current +=1; 
       }else{
         current -=1;
       }
       nyumi_api.change_color(current);
        
    })
    
  },
  change_color: function(val){
    $('.product_section_outer').attr('data-val', val); 
    $('.product_Category_item .category_item').removeClass('active');
    $('.product_Category_item .category_item[data-item="'+val+'"]').addClass('active'); 
  },
  outher_option: function(){
    
    $('body').on('click', '.product_thumb li',function(){
      var index = $(this).data('index');       
      console.log(index);
      $('.product_image').slick('slickGoTo',index); 
    });
    
    
      
    $('.newslater_design form').on('submit', function(e){
      // e.preventDefault();
      var email = $('.newslater_design form #fname').val();
      
      webengage.track("User Signed Up", {
           email: '"'+email+'"',
           signup: true
      });
      webengage.user.login(email); 
      webengage.user.setAttribute('we_email', email);
      
    });
   
    
    $('#RegisterForm[action="/account"]').on('submit', function(e){
      var phone = $(this).find('[type="number"]').val();
        
      if(phone.length < 6){
        alert("Phone required");
        e.preventDefault();
      }else{
         
        add_registier_webengage($(this));
      }
      
    });
    
    function add_registier_webengage(that){
      var f_name = that.find('.first_name').val();
      var l_name = that.find('.last_name').val();
      var phone = that.find('.phone').val();
      var emil = that.find('[type="email"]').val();
       
       webengage.track("Create Account", {
           First_name: f_name,
           Last_name: l_name,
           Email: emil,         
           phone : phone
      });
      
    }
    
    
    
 
    
    $('body').on('click', 'a', function(){
      var url = $(this).attr('href');
      
      if($('body').hasClass('template-index') && !$(this).hasClass('site-header__cart')){
        window.location.href = url;
      }
      
    });
    
    $('body').on('click', '.read_more_faq', function(e){
      e.preventDefault();
      $('.product_tab_item').show();
      $(this).hide();
    });
    
    $(".ingd_podinfo").click(function() {
          $(this).find('span').show();
      }).mouseleave(function() {
          $(this).find('span').hide();
      });
    
   
    $('body').on('click', '.url_btn_style, #Science-btn, #Purpose-button, #banner_btn', function(e){
      	//e.preventDefault();
        var href = $(this).attr('href');
        window.location.href =href;  
    });
    
    
    $('body').on('click', '.click_link', function(){
      var href = $(this).attr('href');      
      $(location).attr('href', href);
    });
    
    $('form.first_address').on('submit', function(e){
      
      var phone = $(this).find('[name="address[phone]"]').val();
       
      if(!validatePhone(phone)){
        $(this).find('[name="address[phone]"]').addClass('error');
        $(this).find('.error_info').html('Invalid phone number').show();
        e.preventDefault();
        return false;
      }
      
    });
    
    function validatePhone(txtPhone) {
     // var a = document.getElementById(txtPhone).value;
      var filter = /^\d*(?:\.\d{1,2})?$/;
      if (filter.test(txtPhone ) && txtPhone.length > 8) {
        return true;
      }
      else {
        return false;
      }
    }
    
    
    $('.address-edit-toggle').on('click', function(){
      $(this).closest('.acut_addfull_deatil').find('.address').slideToggle();
    });
    
  // $('.pdhome_flx .pdhm_itme[data-index="4"], .pdhome_flx .pdhm_itme[data-index="3"]').addClass('hide_mobile_list'); 
     
    
    $('.select_date').on('change', function(){
      var day = $('#day').val();
      var month = $('#month').val();
      var year = $('#year').val();
      var date = '';
      if(day !='0' && month !='0' && year !='0'){
        date = year+'-'+month+'-'+day;
        $(this).closest('.edit_custinf_form').find('[name="address[address2]"]').val(date);
      }
      
      
    });
    
    $('.share_url_btn').on('click', function(){
      $('.share_input_form').slideToggle();      
    });
    
    $('.whtapp_share').on('click', function(){
        var phone = $('.whtapp_phone').val();
        var url = $('.whatpp_url').val();
        url = 'https://wa.me/'+phone+'/?text='+url;
        window.open(url, '_blank');
    });
    
     $('body').on('click', '.account_info_header', function(){
       if($(this).hasClass('active')){
         $(this).removeClass('active');
         $(this).next('.acut_full_detal').slideToggle();
       }else{
         $('.account_info_header.active').next('.acut_full_detal').slideToggle();
         $('.account_info_header').removeClass('active');
         
         $(this).addClass('active');
         $(this).next('.acut_full_detal').slideToggle();
           show_ekoma();
       }
        
       
     });
    
    $('body').on('click', '.order_items_box', function(){
        $(this).toggleClass('active');
        $(this).find('.oditems_fullDetial').slideToggle();
       
    });
    
    $('body').on('click', '.custinf_edit_info, .customer_cancel_form', function(){
        $(this).toggleClass('active');
        $('.edit_custinf_form, .acut_customerinfo').slideToggle();        
    });
     
    $('body').on('click', '.updata_password_btn', function(){
      $('.password_form_box').slideToggle();  
    });
        
    $('body').on('click', '.account_menu li', function(){
      if(!$(this).hasClass('logout_link')){
          var id = $(this).index();
          $('.account_menu li').removeClass('active');
          $(this).addClass('active');

          $('.right_side_detail .rgsd_item').removeClass('active');
          $('.right_side_detail .rgsd_item:eq('+id+')').addClass('active');

          if($(this).hasClass('Refer_friend_btn')){
            // $('.ekoma-btn').trigger('click');
             show_ekoma();
          }      
      }
      
    });
    
    function show_ekoma(){
      $('#refcandy-poprocks div').trigger('click').addClass('active');
      
      /*  
      if(!$('.ekoma-card').length){
        $('.ekoma-btn').trigger('click');
      }      
      var whtapp = '<span class="whtapp"><a target="_blank" href="https://wa.me/918291155181"><img src="//cdn.shopify.com/s/files/1/0412/3027/0631/t/94/assets/black-whatapp.png?v=122251336417792918411682513552" alt="Whatsapp logo"/></a></span>';       
      if(typeof $('.ekoma-mt-5 .whtapp').html() ===  'undefined'){
      	$('.ekoma-mt-5').prepend(whtapp);
      }
       
       */
    }
    
    
    
    
    $('body').on('click', '.ingredient_combo_menu ul li', function(){
         var id = $(this).index() +1;
         
    	 $('.ingredient_combo_menu li').removeClass('active');
      	 $(this).addClass('active');
      	 $('.content_wrapper').hide();
         $('.content_wrapper[data-id="'+id+'"').css('display', 'flex');
    });
    
    // search
    $('body').on('keypress', '.bgsh_input',function(e) {
     // e.preventDefault();
      key_search($(this));
      
    });
    
    $('.serch_blog_form').on('submit', function(e){
      e.preventDefault();
    });
    
    
    function key_search(that){
      setTimeout(function(){
        
        var search = that.val();
        var blog_item = 1;
        var not_found = true;
        if(search.length > 3){           
          $('.blog_post_outer').addClass('active_filter');
          
          $('.blog_post_outer .blog_post').each(function(){
             var title = $(this).find('.post_title').html();            
             var description = $(this).find('.bgpt_description').html();
            
             if(title.indexOf(search) != -1 || description.indexOf(search) != -1){
               not_found = false;
               $(this).show();
               if(blog_item%2 != 1){
                  $(this).addClass('reverse_post');
                }
               blog_item += 1;
             }else{
               $(this).hide().removeClass('reverse_post');                 
             }
            
          });
        }else{
           not_found = false;
           $('.blog_post_outer .blog_post').show().removeClass('reverse_post');
           $('.blog_post_outer').removeClass('active_filter');
        }
        
        if(not_found){
          $('.blog_nav .post_notfound').html('No results found');
        }else{
           $('.blog_nav .post_notfound').html('');
        }
        
      },10);
    }
    
    
    var deg = 0, top_scroll = 1;    
    setInterval(function(){
      deg += 40;
      gif_cricle(deg); 
      
      top_scroll = top_scroll%2;
      product_img_gif(top_scroll);
      top_scroll += 1;

      if($('.empty-cart').css('display') == 'block') {
          $('.sub-footer').hide()
          // $('.apply_coupon_initial').hide()
        }
        else {
          $('.sub-footer').show()
          // $('.apply_coupon_initial').css('display','flex')
        }
      for(var i=0; i<$('.minct_item_price').length; i++) {
        if($('.minct_item_price')[i].attributes['price'].value == $('.minct_item_price')[i].attributes['compare_at_price'].value) {
          $('.minct_item_price')[i].children[0].innerText = ''
        }  
      }
      
      if($('.min_cart').scrollTop() > 0) {
        $('.coupon_header').css('top','0')
      }
      else {
        $('.coupon_header').css('top','auto')
      }
      
      // if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
      //   $('.item_details').hide()  
      //   $('.apply_coupon_initial').hide()
      //   // $('.apply_coupon_initial').hide()
      //   $('.sub-footer').hide()
      //   $('.site-header__cart-count').hide()
      //   $('.empty-cart').show()
      //   }
      //   else if($('.item_details').length == 0) {
      //     $('.item_details').hide()  
      //   $('.apply_coupon_initial').hide()
      //   // $('.apply_coupon_initial').hide()
      //   $('.sub-footer').hide()
      //   $('.site-header__cart-count').hide()
      //   $('.empty-cart').show()
      //   }
      // else {
      //   $('.item_details').show() 
      //   if($('.available_coupons').css('display') == 'flex') {
      //     $('.apply_coupon_initial').show()
      //   }
      //   else {
      //     $('.apply_coupon_initial').hide()
      //   }
      //   // $('.apply_coupon_initial').show()
      //   $('.sub-footer').show()
      //   $('.site-header__cart-count').show()
      //   $('.empty-cart').hide()
      // }

      for(var j=0; j<$('.upsell_variant').length; j++) {
        if($('.upsell_variant')[j].children.length > 5) {
            for(var i=5; i<$('.upsell_variant')[j].children.length; i++) {
                $('.upsell_variant')[j].children[i].style.display = 'none'
            }
        } 
      }
      
    }, 800);
    
    function gif_cricle(deg){
      deg = deg + 'deg';
      $('.round_line').css('transform', 'rotate('+deg+')');
    }
    
    function product_img_gif(top_scroll){
       $('.big_img_box, .product_section_outer').toggleClass('active_animation');
      
      /*
      if($(window).width() < 769 && $(window).width() > 420){         
        if(top_scroll){
            $('.big_img_slider').css({'margin-top': 'calc(38vw - 20px)', 'margin-bottom': '0'});
          }else{
            $('.big_img_slider').css({'margin-top': 'calc(38vw - 25px)', 'margin-bottom': '0'});
          }
      }else if( $(window).width() < 421){
         if(top_scroll){
            $('.big_img_slider').css({'margin-top': 'calc(50px - 20px)', 'margin-bottom': '0'});
          }else{
            $('.big_img_slider').css({'margin-top': 'calc(50px - 25px)', 'margin-bottom': '0'});
          }
      }else{
          if(top_scroll){
            $('.big_img_slider').css({'margin-top': '75px', 'margin-bottom': '25px'});
          }else{
            $('.big_img_slider').css({'margin-top': '100px', 'margin-bottom': '0'});
          }
        }
        */
    }
    
    var show_itme = 5;
     $('body').on('click', '.ingf_flx_btn', function(){       
        var item = $(this).closest('.page_width_right');
        show_itme +=5;
        var itme_size = item.find('.ingf-slider li').size();
       
       if(show_itme >= itme_size ){
         $(this).hide();
       }
        for(var i = 0;  show_itme > i; i +=1){
           item.find('.ingf-slider li:eq('+i+')').show();
        }
     });
    
    
    
    $('body').on('click', '#blog_cat li', function(){
      var id = $(this).data('id');
      $('#blog_cat li').removeClass('active');
      $(this).addClass('active');
      $('.blog_drop_down').removeClass('active');
      
      
      $('.blog_drop_down').html($(this).html());
       
      $('.blog_post').hide().removeClass('reverse_post');
     
      
      if(id == '0'){
        $('.blog_post').show();
        $('.blog_post_outer').removeClass('active_filter');
      }else{
         filter_post(id);
        $('.blog_post_outer').addClass('active_filter');
      }
      
      
      if($(window).width() < 1025 ){
        $('.blog_cat_box').slideToggle();
      }
      
    });
    
    function filter_post(id){
      var blog_item = 1;
      $('.blog_post_outer .blog_post').each(function(){
        var cat_id = $(this).data('cat');
        
        if(cat_id == id){          
          if(blog_item%2 != 1){
            $(this).addClass('reverse_post');
          }
          $(this).show();
          blog_item += 1;
        }else{
          $(this).hide();
        }
        
      });
    }
    
    $('body').on('click', '.blog_drop_down', function(){
       $('.blog_cat_box').slideToggle();
       $(this).toggleClass('active');
    });
    
    
     $('body').on('click', '.crsbn_btn', function(e){  
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".carrer_opp_section").offset().top
        }, 1000);
     });
      
        $('body').on('click', '.product_Category_item .category_item', function(){          
          var item = $(this).data('item');
           $('.pdhome_flx').slick('slickGoTo', item);  
           nyumi_api.change_color(item);
        });
      
     
    $('body').on('click', '.crrpac_item', function(){
      var id = $(this).data('id');
      if(typeof id !== 'undefined'){
        $(this).toggleClass('active');
        $('.crpac_description[data-id="'+id+'"]').slideToggle().toggleClass('active');
        $(this).closest('.crpp_accouding').toggleClass('active');
      }
      
    });
   
    
    $('body').on('click', '.icon_box_text .three', function(e){
      $('.icon_box_text .three').removeClass('active');
      $('#Press_txt .cm_p').removeClass('active').hide();
      $(this).addClass('active');
      var id = 0, n = true;
      
      $('.icon_box_text .three').each(function(e){
        if(n){
          if($(this).hasClass('active')){              
               n = false;
          }else{
            id = id+1;
          }
        }
           
      });
      $('#Press_txt .cm_p').eq(id).addClass('active').show();
             
    });
    
    
    // cricle
    var value = 0;
    
    setInterval(function(){
       value = value + 180;
    	//rotate(value);
    },3500);
    
    function rotate(value){
      $('.eqpd .round_line').css('transform', 'rotate('+value+'deg)');
    }
    
    
    // header mobile menu
    
    $('body').on('click', '.mobile_child_item', function(){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).next('.mobile-nav__dropdown').slideToggle();
      }else{        
        $('.mobile_child_item.active').next('.mobile-nav__dropdown').slideToggle();
        $('.mobile_child_item').removeClass('active');
        
        $(this).addClass('active');
        $(this).next('.mobile-nav__dropdown').slideToggle();
      }
      
    });
    
     
    
    
    $('body').on('click', '.social_icon_close', function(){
      // $(this).next('.bgpt_social_list').slideToggle();
      //  $(this).toggleClass('active');
      $(this).closest('.bgpt_post_detail').slideToggle();
      
       var url =  $(this).data('url');
       var that = $(this).closest('.blog_post').find('.bgpt_btn');
       that.removeClass('active');
       show_blog(that, url);
       
    });
    
     
    /*
    $('body').on('click', '.bgpt_btn', function(e){
       e.preventDefault();
       $(this).closest('.blog_post').find('.bgpt_post_detail').slideToggle();
      
      close_blog();
      
       $(this).toggleClass('active');
       var url =  $(this).data('url');
       show_blog($(this), url); 
       blog_click(url);
      
    });
    */
    
     function blog_click(url){        
        webengage.track("Blog Click", { 
            "url" : url    
        });
    }
    
    function close_blog(){
      var url = $('.bgpt_btn.active').data('url');
      
      if(typeof url !== 'undefined' ){
      $('.bgpt_btn.active').closest('.blog_post').find('.bgpt_post_detail').slideToggle();
      $('.bgpt_btn').removeClass('active');
        
        var url_first = window.location.href;
        url = '/'+url;
        url_first = url_first.replace(url,'');
        window.history.pushState('page2', 'Title', url_first);
      }
    }
    
    
    function show_blog(that, url){      
        if(that.hasClass('active')){
          url = window.location.pathname+'?'+url;
         window.history.pushState('page2', 'Title', url);
        }else{
           var url_first = window.location.href;
           url = '?'+url;
           url_first = url_first.replace(url,'');
           window.history.pushState('page2', 'Title', url_first);
        }      
    }
    
    /*
    $('body').on('click', '.inlpst_item', function(){
       var id = $(this).data('id');
       $('.inlpst_item').removeClass('active');       
       $('.inlpst_big').hide();
      
       $(this).addClass('active');
       $('.inlpst_big[data-id="'+id+'"]').slideToggle();
      $('.inlpst_big[data-id="'+id+'"] .bgpt_post_detail').show();
      
      // scroll 
      var scroll_point = $(this).closest(".inline_post");
      $('html, body').animate({
        scrollTop: scroll_point.offset().top
      }, 600);       
    });
    */
    
    
    $('body').on('click', '.inlpst_big', function(){
      	var id = $(this).data('id');
        $(this).slideToggle();
        $('.inlpst_item[data-id="'+id+'"]').removeClass('active');
    });
    
    
    // faq
    $('body').on('click', '.faq-categories li', function(){
      var id = $(this).data('cat');
      $('.faq-categories li').removeClass('active');
      var txt = $(this).html();
      $('.select_value').html(txt);
      $(this).addClass('active');
      $('.product_tab_item').hide();
      
      if(id == 0){
        $('.product_tab_item').fadeIn();
      }else{
      	$('.product_tab_item[data-cat="'+id+'"]').fadeIn();
      }
      
      if($(window).width() < 769){
         $('.faq-categories ul').slideUp().toggleClass('active');
         $('.select_value').toggleClass('active');
      }
    });
    
     $('body').on('click', '.select_value', function(){
       $('.faq-categories ul').slideToggle().toggleClass('active');
       $(this).toggleClass('active');
     });
    
    // first child
    $('.faq-categories li:first-child').trigger( "click" );
   //  $('.product_tab_item').hide();
   //  $('.product_tab_item[data-cat="'+id+'"]').show();
    
    $('body').on('click', '.ppal_close, .ppal_outer', function(){
      $('.popup_apply').fadeOut();
    });
    
    $('body').on('click', '.crpac_btn', function(){
      //$('.popup_apply').fadeIn();
    });
   
    
  },
  product_page: function(){
    
    $('body').on('click', '.pdtb_heading', function(){
      	$(this).closest('.product_tab_item').toggleClass('active');
        $(this).next('.pdtb_detail').slideToggle();
    });
    
    $('body').on('click', '.product_sign', function(){
       var qty = parseInt($(this).closest('.prodcut_qty_box').find('[name="quantity"]').val());
      if($(this).hasClass('qty_minis')){
        qty = qty -1;        
      }else{
        qty = qty +1;
      }
      
      if(qty > 0 && qty < 11){
         $(this).closest('.prodcut_qty_box').find('[name="quantity"]').val(qty);
      }
      
      
      
    });
    
  },
  loader_function(){
    
    setTimeout(function(){ 
      var product_slider = true;     
      // product slider
      $('img.big_img_slider').load(function(e){          
          $('.product_section_outer').removeClass('preloader');  
          product_slider = false;           
      });      
      
      if(product_slider){
        set_timeinterval();
      }
    }, 900);
  },
  load_gif(){
    setTimeout(function(){ 
      // gif icon
       var gif_icon = true;
       var icon = 0;
      $('#hm_icon_boxes .boxes').each(function(){
        
       $('.gif_icon_'+icon+' img').load(function(e){ 
         
          $('.gif_icon_'+icon).addClass('preloader_hide');
          gif_icon = false;
         
        });
        icon +=1;
      
         
        
       });
            
       if(gif_icon){
          nyumi_api.load_gif();
        }
      }, 900);

  },
  mincart: function(){
    
    $('body').on('click', '[data-cart-remove]', function(e){
       e.preventDefault();
       var url = $(this).attr('href');
       var item = $(this).closest('.cart__row'); 
      
      var title = item.attr('data-cart-item-title'), 
          id=item.attr('data-id'), 
          qty=item.attr('data-cart-item-quantity'), 
          price = item.attr('data-price');
      var img  = item.attr('data-img');
      
      
      nyumi_api.webengage_delete_cart(title, id, qty, price, img);
      
        
      setTimeout(function(){
        location.reload();
      },1000);
    });
    
      $('body').on('change', '[data-quantity-input]', function(e){
       e.preventDefault();
        
      var item = $(this).closest('.cart__row'); 
      var title = item.attr('data-cart-item-title'), 
          id=item.attr('data-id'), 
          qty=$(this).val(), 
          price = item.attr('data-price');
      var img  = item.attr('data-img');
      
       
      nyumi_api.webengage_update_cart(title, id, qty, price, img);
      
        setTimeout(function(){
        	location.reload();
        },800);
       
    });
    
    
    
    $('body').on('click', '.minct_qty_sign', function(event){
      // $('.cart_drawer_loder').removeClass('hide');
      // setTimeout(function(){
      //   $('.cart_drawer_loder').addClass('hide');
      // },1000);
      
      var qty = parseInt($(this).closest('.minct_item_qty').find('.minct_qty').html());
      var id = $(this).closest('.minct_item').attr('data-line');
      // $('.new_upsell').hide()
      if($(this).hasClass('minius_sighn')){
        qty -=1;
      }else{
        qty +=1;
      }
       
      
      $(this).closest('.minct_item_qty').find('.minct_qty').html(qty);
      edit_cart_line(qty, id, event); 
      
      var title = $(this).closest('.minct_item_title').find('.minct_title').html();
      var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
      var img = $(this).closest('.minct_item').find('.minct_item_img > img').attr('src'); console.log(img);
       
      nyumi_api.webengage_update_cart(title, id, qty, price, img);
             
      if(qty < 1 ){
        var id = $(this).closest('.minct_item').data('id');
        edit_cart(0, id);
        var title = $(this).closest('.minct_item_title').find('.minct_title').html();
        var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
        var img  = $(this).closest('.minct_item').find('.minct_item_img').find('img').attr('src');

        nyumi_api.webengage_delete_cart(title, id, 0, price, img);
      }

      setTimeout(function(){
        $.ajax({
          type: "GET",
          url: "https://nyumi.com/cart.json",
          headers: { "Content-Type": "application/json" },
        }).then((data) => {
          if(data.item_count == 0) {
            console.log('count',data.item_count)
            // $('.apply_coupon_initial').hide()
            $('.sub-footer').hide()
              $('.item_details').hide()
            $('.empty-cart')[0].style.display = 'block'
            if($('.empty-cart').length == 2){
              $('.empty-cart')[1].style.display = 'none'
            }
          }
        })
      },2000)  
      
    });
    
    $('body').on('click', '.minct_item_remove', function(){     
      
      var id = $(this).closest('.minct_item').data('id');
       edit_cart(0, id);
      var title = $(this).closest('.minct_item_title').find('.minct_title').html();
      var price =  parseInt($(this).closest('.minct_item').data('price'))/100;
      var img  = $(this).closest('.minct_item').find('.minct_item_img').find('img').attr('src');
      
       nyumi_api.webengage_delete_cart(title, id, 0, price, img);
    });
    
    
    $('body').on('click', '.site-header__cart', function(e){
      e.preventDefault();
      $('.min_cart').toggleClass('active');
    });
    
    $('body').on('click', '.minct_close, .min_cart_outer', function(e){
      $('.min_cart').toggleClass('active');
    });
    
    $('body').on('submit', 'form[action="/cart/add"]', function(e){
      e.preventDefault();
      
      var Recommendation = false;
      if($(this).closest('.grid__item').hasClass('recommendation') || $(this).closest('.grid__item').hasClass('medium-up--one-third')  ){
        Recommendation = true;
      }
      
      add_to_cart($(this), Recommendation);
    });

    $('body').on('click', 'button.save', function(event){
      event.preventDefault()
      var new_id
      var old_id = event.currentTarget.attributes['old-id'].value
      var product_id = event.currentTarget.attributes['product-id'].value
      var quantity = $('.minct_item[data-id="'+old_id+'"]')[0].children[1].children[3].children[0].children[1].innerText
      for(var i=0; i<$('.upsell[product-id="'+product_id+'"]').length; i++) {
        if($('.upsell[product-id="'+product_id+'"]')[i].children[0].children[0].checked == true) {
          new_id = $('.upsell[product-id="'+product_id+'"]')[i].attributes['variant-id'].value
        }
      }
      $('.cart_drawer_loder').css('position','fixed')
      $('.cart_drawer_loder').css('height','100%')
      $('.cart_drawer_loder').css('position','fixed')
      $('.cart_drawer_loder').css('right','0')
      $('.cart_drawer_loder').css('top','0')
      $('.cart_drawer_loder').removeClass('hide');
      console.log("old id",old_id)
      console.log("new id",new_id)
      console.log("quantity",quantity)

      if(new_id) {
        setTimeout(function(){
          $('.cart_drawer_loder').addClass('hide');
          $('.cart_drawer_loder').css('position','absolute')
          $('.cart_drawer_loder').css('height','calc(100vh - 120px)')
          $(event.currentTarget.previousElementSibling).click()
        },1000);
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: {
            id: parseFloat(new_id),
            quantity: quantity,
          },
       }).then(data => {
            $.ajax({
              type: "POST",
              url: "/cart/change.js",
              dataType: "json",
              data: {
                'id': parseFloat(old_id),
                'quantity': 0,
              },
            }).then(data => {
              // location.reload()
            });
          })
        }
      else {
        setTimeout(function(){
          $('.cart_drawer_loder').addClass('hide');
        })
        $('.select_input_error').show()
      }
      })
    
    
    $('body').on('click', '.spd_add_to_cart', function(e){
    	e.preventDefault();
      var url = $(this).attr('href');
      add_to_url(url);
    });

    $('body').on('click', '.upsell', function(event){
      // event.preventDefault()
      for(var i=0; i<$('.upsell input').length; i++) { $('.upsell input')[i].checked = false }
      event.currentTarget.children[0].children[0].checked = true
    })

    $('body').on('click', '.top_head img', function(event){
      event.preventDefault()
      var product_id = event.currentTarget['attributes']['product-id']['value']
      $('.variant-popup[product-id=' + product_id + ']').css('display','none')
     })

    $('body').on('click', 'button.cancel', function(event){
      event.preventDefault()
      var product_id = event.currentTarget['attributes']['product-id']['value']
      $('.variant-popup[product-id=' + product_id + ']').css('display','none')
    })

    
     function add_to_url(url){
     
       jQuery.ajax({
          type: 'POST',
         async: false,
          url: url,          
          success: function() { 
             get_cart();
            setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
              show_upsell()
            },1500)
          }
        });
    }
    
     async function edit_cart_line(qty , line, e){ 
      e.target.parentElement.children[0].style.opacity = 0.5
      e.target.parentElement.children[0].style.pointerEvents = 'none'
      e.target.parentElement.children[1].classList.add('hide')
      e.target.parentElement.children[2].classList.remove('hide')
      e.target.parentElement.children[3].style.opacity = 0.5
      e.target.parentElement.children[3].style.pointerEvents = 'none'
      // setTimeout(function(){
        
      // },2000)
      line = parseInt(line) + 1;
       
      var data = { quantity: qty, line: line };
       var x= await jQuery.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: data,
          dataType: 'json',
          success: function(cart) {  
             e.target.parentElement.children[0].style.opacity = 1
             e.target.parentElement.children[0].style.pointerEvents = 'all'
             e.target.parentElement.children[1].classList.remove('hide')
             e.target.parentElement.children[2].classList.add('hide')
             e.target.parentElement.children[3].style.opacity = 1
             e.target.parentElement.children[3].style.pointerEvents = 'all'
             // get_cart(); 
             // update_cart_price()
            // show_upsell()
          },
          error: function (jqXHR, exception) {
              //  alert('Low Stock');              
          }
        });
    }
    
    async function edit_cart(qty , id){ 
       
      var data = { quantity: qty, id: id };
       var x = await jQuery.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: data,
         async: false,
          dataType: 'json',
          success: function(cart) {  
             get_cart(); 
            setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
              show_upsell()
            },1500)
          },
          error: function (jqXHR, exception) {
                alert('Low Stock');              
          }
        });
    }
    
    async function add_to_cart(that, Recommendation){
      $('.btn[data-add-to-cart]').prop('disabled',true)
      that.find('[data-add-to-cart-text]').html('Adding...');
       var x = await jQuery.ajax({
          type: 'POST',
          url: '/cart/add.js',
          data: that.serialize(),
          dataType: 'json',
          success: function(cart) { 
            //  get_cart();
            // setTimeout(function(){
            //   sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc')
            //   show_upsell()
            //   $('.btn[data-add-to-cart]').prop('disabled',false)
            // },1500)
            $('.btn[data-add-to-cart]').prop('disabled',false)
            that.find('[data-add-to-cart-text]').html('Add to cart');
            nyumi_api.webengage_add_cart(cart);
             $('.min_cart').addClass('active');
            if(Recommendation){
              nyumi_api.webengage_Recommendation_cart(cart);
            }
          },
          error: function (jqXHR, exception) {
                alert('Low Stock');     
            $('.btn[data-add-to-cart]').prop('disabled',false)
          }
         
        });
      console.log('clicked add to cart',)
      
    }

    function sortMeBy(arg, sel, elem, order) {
              var $selector = $(sel),
                $element = $selector.children(elem);
            
              $element.sort(function(a, b) {
                var an = parseInt(a.getAttribute(arg)),
                  bn = parseInt(b.getAttribute(arg));
            
                if (order == 'asc') {
                  if (an > bn)
                    return 1;
                  if (an < bn)
                    return -1;
                } else if (order == 'desc') {
                  if (an < bn)
                    return 1;
                  if (an > bn)
                    return -1;
                }
                return 0;
              });
            
              $element.detach().appendTo($selector);
            }
    
    async function get_cart(){
        var x = await jQuery.ajax({
          type: 'POST',
          async: false,
          url: '/cart.js',           
          dataType: 'json',
          success: function(resuelt) { 
            console.log(resuelt)
            $('.cart_drawer_loder').removeClass('hide')
          }
        }).then(function(resuelt){
          console.log('resulttttt',resuelt)
            show_mincart(resuelt);
            $('.checkout_btn').css('display','flex')
          $('.cart_drawer_loder').addClass('hide')
            // setTimeout(function(){
              sortMeBy('data-line', 'div.minct_detail', 'div.item_details', 'asc');
              // show_upssell()
            // },2000)

          nyumi_api.webengage_view_cart(resuelt);
            if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
              $('.item_details').hide()  
              // $('.apply_coupon_initial').hide()
              $('.sub-footer').hide()
              $('.empty-cart').show()
              }
            else {
              $('.item_details').show()  
              // $('.apply_coupon_initial').show()
              $('.sub-footer').show()
              $('.empty-cart').hide()
            }
            
        }).then(show_upsell())
    }

    function update_cart_price() {
    
      // if($('.empty-cart')[0].style.display = 'none'){
    $.ajax({
        type: "GET",
        url: "/cart.json",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
            // if(response.items.length<1){
            //   $('.may-also-like').hide()
            // }else{
            //   $('.may-also-like').show()
            // }
          
            let price = 0
            let orderTotal = 0
            const discount_amount = (response.total_discount/100)
      
            for(var i=0; i<$('.minct_item_price').length; i++) {
                  orderTotal = (orderTotal) + (parseInt($('.minct_item_price')[i].attributes['compare_at_price'].value.slice(0,-2)) * parseInt($('.minct_qty')[i].innerText))
            }
            for(let i=0; i<response.items.length; i++) {
               price=price+ (response.items[i].original_price* response.items[i].quantity)/100
            }
            if(response.cart_level_discount_applications.length<1){
              if(price>499){
                $('.shipping .value')[0].innerHTML = '<span style="text-decoration: line-through;">₹ 50 </span><span style="color: #f37168; padding-left: 5px;">FREE</span>'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + 50 + orderTotal - price).toFixed(0)
              }else{
                $('.shipping .value')[0].innerText = '₹ 50'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + orderTotal - price).toFixed(0)
              }
               $('.items-discount').hide()
            }else{
              $('.items-discount').hide()
               $('.items-discount span')[0].innerText = response.cart_level_discount_applications[0].title
             if(price>499){
                $('.shipping .value')[0].innerHTML = '<span style="text-decoration: line-through;">₹ 50 </span><span style="color: #f37168; padding-left: 5px;">FREE</span>'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + 50 + orderTotal - price).toFixed(0)
              }else{
                $('.shipping .value')[0].innerText = '₹ 50'
                $('.saving_message span')[0].innerText = '₹ ' + (discount_amount + orderTotal - price).toFixed(0)
              }
            }
           
            $('.items-discount .value')[0].innerText = '-₹ ' + discount_amount.toFixed(0)
            $('.grand-total .value')[0].innerText = '₹ ' + response.total_price/100
            $('.order-total .value')[0].innerText = '₹ ' + orderTotal.toFixed(0)
            $('.sub-total .value')[0].innerText = '₹ ' + price.toFixed(0)
            $('.discount .value')[0].innerText = '-₹ ' + (orderTotal - price + discount_amount).toFixed(0)
            $('.grand-total .value')[0].innerText = '₹ ' + (response.total_price/100).toFixed(0)
            $('.checkout_btn span')[0].innerText = 'Total ₹ ' + (response.total_price/100).toFixed(0)
          
    setTimeout(function(){
        if($('.items-discount').css('display') == 'none') {
          $('.apply_coupon_initial .input_box')[0].value = ''
          $('.apply_coupon_initial .initial_apply_btn')[0].innerText = 'Apply'
        }
      },1200)
    if($('.apply_coupon_initial .input_box')[0].value == 'XXXX') {
      $('.apply_coupon_initial .input_box')[0].value = ''
    }
      // }
  })
}//end


  async function product_api(url_handle,index) {
     await jQuery.getJSON(window.Shopify.routes.root + 'products/'  + url_handle + '.js', function(product) {
      console.log('product', product)
      // for(var k=0; k<$('.minct_item').length; k++) {
       if(product['variants'].length <= 1 || product['id'] == '6094251163815') {
         $('.new_upsell')[index].style.display = 'none'
       }
       else{
        for(var j=0; j<product['variants'].length; j++) {
          if(parseInt($('.minct_item_price')[index].attributes['price'].value) < product['variants'][j]['price']) {
            console.log('product price',product['variants'][j]['price']);
            console.log('cart price',parseInt($('.minct_item_price')[index].attributes['price'].value))
            $('.new_upsell')[index].style.display = 'block'
          }
          else {
            console.log("didn't found any upsell variant")
            $('.new_upsell')[index].style.display = 'none'
          }
        }
       }
    });
  }

    // $('body').on('click', '#after-adding-edit-icon', add_upsell_data())

  function show_upsell_variants(id, price) {
    console.log(id, price)
    for(var y=0; y<$('.upsell[product-id="'+id+'"]').length; y++) {
      if(parseInt($('.upsell[product-id="'+id+'"]')[y].attributes['variant-price'].value) > parseInt(price)) {
          $('.upsell[product-id="'+id+'"]')[y].style.display = 'flex'
      }
      else {
          $('.upsell[product-id="'+id+'"]')[y].style.display = 'none'
      }
    }
  }
    
  async function show_upsell() {
      await $.ajax({
          type: "GET",
          url: "https://nyumi.com/cart.json",
          headers: { "Content-Type": "application/json" },
        async: false,
      }).then((data) => {
        console.log(data)
        for(var i=0; i<data['items'].length; i++) {
          console.log(data['items'][i]['handle'])
          var url_handle = data['items'][i]['handle']
          var x =  product_api(url_handle,i)
        }
      })
    }

    
    function show_mincart(cart){
      
      var html = '';
      var total = 0;
      
      var compare_at_price = 0;
      var old_price;
      var final;
      
     async function getProductJSON(item,price) {
          var result = await jQuery.getJSON(window.Shopify.routes.root + 'products/' + item.handle + '.js', function(product) {
            console.log(product)
            result = product.compare_at_price 
          } ).then(
            (result) => {
              price = result.compare_at_price
              return price
            });
          
      }
    function productJSONData() {
      var cart_length  = cart.items.length
      var sum = cart_length*(cart_length-1)/2
      var loop_sum = 0
      $(cart.items).each(async function(index, item){
        console.log(item,'item')
        getProductJSON(item,item.price)
        
          var productData = await jQuery.getJSON(window.Shopify.routes.root + 'products/' + item.handle + '.js', function (productdata) {
            productData = productdata
          }).then((productData) => {
            console.log('productdata.compare_at_price',productData,index,sum,loop_sum)
            console.log(productData)
            console.log(item,item[0])
            var sale_price = item.price
            if(item.price == item.total_discount){
              sale_price = 0
            }
            if(item.options_with_values[0].value == 'Pack of 1') {
                compare_at_price = productData.variants[0].compare_at_price
            }
            else if(item.options_with_values[0].value == 'Pack of 2') {
                compare_at_price = productData.variants[1].compare_at_price
            }
            else if(item.options_with_values[0].value == 'Pack of 3') {
                compare_at_price = productData.variants[2].compare_at_price
            }
            else {
              compare_at_price = productData.compare_at_price
            }
            if(item.price == item.discounted_price){
              conpare_at_price = ''
            }
         html +='<p class="empty-cart" style="display:none;">'+'Your cart is empty'+'</p>'+
                 '<div class="item_details" data-line="'+index+'">'+'<div class="minct_item" data-line="'+index+'" data-id="'+item.id+'" data-price="'+item.price+'">'+
                  '<div class="minct_item_img">';
                   if(typeof item.image !== 'undefined')
                   html +='<img src="'+item.image+'"  alt="#"/>';
                  if(item.variant_title==null)
                  item.variant_title="";
                   html +='</div>'+
                    '<div class="minct_item_title">'+
                       '<a href="'+item.url+'" class="minct_title">'+item.product_title+'</a>'+
                        '<p class="product-details__item product-details__item--variant-option">'+item.variant_title+'</p>'+
                       '<div class="minct_item_price" yash price="'+sale_price+'" compare_at_price="'+compare_at_price+'">'+theme.Currency.formatMoney(sale_price, theme.moneyFormat)+
                         '<span class="compare_at_price">'+theme.Currency.formatMoney(compare_at_price, theme.moneyFormat)+'</span>'+
                       '</div>'+
                       '<div class="remove_and_qty">'+
                         '<div class="minct_item_qty">'+
                           '<div class="minct_qty_sign minius_sighn"></div>'+
                           '<div class="minct_qty">'+ item.quantity +'</div>'+
                           '<i class="fa fa-circle-o-notch fa-spin hide" style="font-size:24px"></i>'+
                          ' <div class="minct_qty_sign plus_sign"></div>'+
                         '</div>'+

                        ' <div class="minct_item_remove hide">remove </div>'+
                       '</div>'+
                   ' </div>'+
                    '</div>'+
                     '<div class="new_upsell" data-line="'+index+'" variant_title="'+item.variant_title+'">'+
                      '<p class="fact-msg">'+'<i style="font-size:20px" class="fa">'+'&#xf0eb;'+'</i>'+'Fact: People who use this product for 3 months see best results'+'</p>'+
                      '<div class="msg-details" product-id="'+item.product_id+'" variant-id="'+item.id+'" variant-price="'+item.price+'">'+
                        '<div class="choose_variant">'+
                          '<input type="radio" style="margin-right: 10px;" />'+
                          '<p>'+'Switch to pack of 2 and pack of 3'+'<br>'+'<span>'+'Save upto 15%'+'</span>'+'</p>'+
                        '</div>'+
                        '<div class="edit-icon" product-id="'+item.product_id+'" variant-id="'+item.id+'" variant-price="'+item.price+'">'+'<i class="fa fa-pencil" aria-hidden="true">'+'</i>'+'</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="variant-popup" product-id="'+item.product_id+'" variant-id="'+item.id+'" product-price="'+item.price+'">'+
                    '<div class="inside_popup">'+
                      '<div class="top_head">'+
                        '<p>'+'Purchase Options'+'</p>'+
                        '<img id="top_head" product-id="'+item.product_id+'" src="https://cdn.shopify.com/s/files/1/0412/3027/0631/files/button-ui_1.png?v=1675079012" />'
                      +'</div>'+
                      '<div class="x upsell_variant upsell_variant-'+item.product_id+'" variant-price="'+item.price+'">'+
                        '<p class="select_input_error">'+'Select any upsell variant'+'</p>'+
                        '<div class="buttons">'+
                          '<button class="cancel" product-id="'+item.product_id+'">Cancel</button>'+
                          '<button class="save" product-id="'+item.product_id+'" old-id="'+item.id+'">Save</button>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>';

          
          loop_sum = loop_sum+index
          if(sum == loop_sum){
             total =theme.Currency.formatMoney(cart.total_price, theme.moneyFormat);
      
      
              $('.minct_detail').html(html); 
              $('.minct_subtotal__price').html(total);
              $('.min_cart').addClass('active');
          
           }
        
          })
        
        
      });

    }
      productJSONData()
       
      if($('.item_details').length == 1 && $('.minct_qty')[0].innerText == 0) {
        $('.item_details').hide()  
        // $('.apply_coupon_initial').hide()
        $('.sub-footer').hide()
        $('.empty-cart').show()
        }
      else {
        $('.item_details').show()  
        // $('.apply_coupon_initial').show()
        $('.sub-footer').show()
        $('.empty-cart').hide()
      }
      
      update_cart_price()
      $('body').on('click', '.msg-details', function(event){
        event.preventDefault()
        add_upsell_data()
        var product_id = event.currentTarget['attributes']['product-id']['value']
        var variant_id = event.currentTarget['attributes']['variant-id']['value']
        var variant_price = event.currentTarget['attributes']['variant-price']['value']
        console.log(variant_id)
        $('.variant-popup[variant-id=' + variant_id + ']').css('display','flex')
        show_upsell_variants(product_id,variant_price)
      })

      function add_upsell_data() {

     add_upsell_data = function(){};
    
     var upsell_data_beauty = JSON.parse(localStorage.getItem("upsell_data_beauty"))
     var upsell_data_radiant = JSON.parse(localStorage.getItem("upsell_data_radiant"))
     var upsell_data_happy = JSON.parse(localStorage.getItem("upsell_data_happy"))
     var upsell_data_iron = JSON.parse(localStorage.getItem("upsell_data_iron"))
     console.log('upsell_data',$(upsell_data_happy)[0])
     upsell_data_beauty = $(upsell_data_beauty)[0].replace('69000',$('.beauty .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 401',$('.beauty .saveRS1')[0].innerText).replace('₹ 1,100',$('.beauty .compare_price1')[0].innerText).replace('36% OFF',$('.beauty .percentage1')[0].innerText).replace('₹ 699',$('.beauty .price1')[0].innerText).replace('165000',$('.beauty .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 840',$('.beauty .saveRS2')[0].innerText).replace('₹ 2,200',$('.beauty .compare_price2')[0].innerText).replace('38% OFF',$('.beauty .percentage2')[0].innerText).replace('₹ 1,360',$('.beauty .price2')[0].innerText).replace('231000',$('.beauty .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 1,320',$('.beauty .saveRS3')[0].innerText).replace('₹ 3,300',$('.beauty .compare_price3')[0].innerText).replace('40% OFF',$('.beauty .percentage3')[0].innerText).replace('₹ 1,980',$('.beauty .price3')[0].innerText)
     upsell_data_radiant = $(upsell_data_radiant)[0].replace('88000',$('.radiant .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 220',$('.radiant .saveRS1')[0].innerText).replace('₹ 1,100',$('.radiant .compare_price1')[0].innerText).replace('20% OFF',$('.radiant .percentage1')[0].innerText).replace('₹ 880',$('.radiant .price1')[0].innerText).replace('165000',$('.radiant .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 550',$('.radiant .saveRS2')[0].innerText).replace('₹ 2,200',$('.radiant .compare_price2')[0].innerText).replace('25% OFF',$('.radiant .percentage2')[0].innerText).replace('₹ 1,650',$('.radiant .price2')[0].innerText).replace('231000',$('.radiant .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 990',$('.radiant .saveRS3')[0].innerText).replace('₹ 3,300',$('.radiant .compare_price3')[0].innerText).replace('30% OFF',$('.radiant .percentage3')[0].innerText).replace('₹ 2,310',$('.radiant .price3')[0].innerText)
     upsell_data_happy = $(upsell_data_happy)[0].replace('79000',$('.happy .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 200',$('.happy .saveRS1')[0].innerText).replace('₹ 990',$('.happy .compare_price1')[0].innerText).replace('20% OFF',$('.happy .percentage1')[0].innerText).replace('₹ 790',$('.happy .price1')[0].innerText).replace('148500',$('.happy .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 495',$('.happy .saveRS2')[0].innerText).replace('₹ 1,980',$('.happy .compare_price2')[0].innerText).replace('25% OFF',$('.happy .percentage2')[0].innerText).replace('₹ 1,485',$('.happy .price2')[0].innerText).replace('207900',$('.happy .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 891',$('.happy .saveRS3')[0].innerText).replace('₹ 2,970',$('.happy .compare_price3')[0].innerText).replace('30% OFF',$('.happy .percentage3')[0].innerText).replace('₹ 2,079',$('.happy .price3')[0].innerText)
     upsell_data_iron = $(upsell_data_iron)[0].replace('79000',$('.iron .price1')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 200',$('.iron .saveRS1')[0].innerText).replace('₹ 990',$('.iron .compare_price1')[0].innerText).replace('20% OFF',$('.iron .percentage1')[0].innerText).replace('₹ 790',$('.iron .price1')[0].innerText).replace('148500',$('.iron .price2')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 495',$('.iron .saveRS2')[0].innerText).replace('₹ 1,980',$('.iron .compare_price2')[0].innerText).replace('25% OFF',$('.iron .percentage2')[0].innerText).replace('₹ 1,485',$('.iron .price2')[0].innerText).replace('207900',$('.iron .price3')[0].innerText.split(' ')[1].replace(',','')+'00').replace('Save ₹ 891',$('.iron .saveRS3')[0].innerText).replace('₹ 2,970',$('.iron .compare_price3')[0].innerText).replace('30% OFF',$('.iron .percentage3')[0].innerText).replace('₹ 2,079',$('.iron .price3')[0].innerText)
    
      console.log('upsell_data',upsell_data)
     $('.upsell_variant-6094251163815').remove()
     $('.upsell_variant-6091784978599').remove()
     $('.upsell_variant-6092022481063').remove()
        
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[0])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[2])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[4])
    $('.upsell_variant-6094251163815').append($(upsell_data_beauty)[6])

    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[0])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[2])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[4])
    $('.upsell_variant-6091784978599').append($(upsell_data_radiant)[6])

    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[0])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[2])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[4])
    $('.upsell_variant-6092022481063').append($(upsell_data_happy)[6])

    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[0])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[2])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[4])
    $('.upsell_variant-8199164985600').append($(upsell_data_iron)[6])
  
  }


    }
     
  },
  webengage_view_cart: function(cart){
    
        var data = [];
    
    $(cart.items).each(function(index, item){
    
      data.push({"Name" :item.product_title, "Id" :item.id,"quantity":item.quantity,"Price":item.price/100,"Image":item.image});
      
    });
    
    // console.log(cart);
    
         webengage.track("Cart Viewed", {
           cart_detail:data,
           total_quantity: cart.item_count,
           total:cart.total_price/100
         });
  },
  webengage_add_cart: function(item){
    
       
        	webengage.track("Added To Cart", {
              "Id" : item.id,
              "Price" : item.price/100,
              "Name" : item.product_title,
              "quantity":  item.quantity,
              "Image": item.image
            });
    
    // nyumi_api.facebook_event(item.price/100, item.quantity);
           
  },
  webengage_Recommendation_cart: function(item){    
       
        	webengage.track("Recommendation", {
              "Id" : item.id,
              "Price" : item.price/100,
              "Name" : item.product_title,
              "quantity":  item.quantity,
              "Image": item.image
            });
           
  },
  webengage_update_cart: function(title, id, qty, price, img){
    
    id = parseInt(id);
    qty = parseInt(qty);
    price = parseInt(price);
    
    if(typeof(img) != 'undefined' && img != null){
    	if(img.indexOf('https') == -1){
      		img = 'https:'+img;
    	}
    }
    
    console.log(price);
    
    
    webengage.track("Cart update", {       
        "Name" : title,        
        "Id" :  id,   
        "quantity": qty,
        "Price":  price,
        "Image": img
    });
    
  },
  webengage_delete_cart: function(title, id, qty, price,img){ 
    
    id = parseInt(id);
    qty = parseInt(qty);
    price = parseInt(price);
    
    if(img.indexOf('https') == -1){
      img = 'https:'+img;
    }
     
    webengage.track("Cart remove", { 
        "Name" : title,        
        "Id" :  id,   
        "quantity": qty,
        "Price":  price,
        "image": img
    });
    
  },
  webengage_page_click: function(){
    
    $('body').on('click', 'a', function(e){
       var url = $(this).attr('href');   
      
       if($('body').hasClass('template-index')){    
          home_click(url);  
       } 
    });
    
    function home_click(url){        
        webengage.track("Home Click", { 
            "url" : url    
        });
    } 
   
  },
  taccking_url: function(){
    
    var url = window.location.search;
    let searchParams = new URLSearchParams(url);
    var utmsource = '(not set)';
    var utmmedium = '(not set)';
    var utmcampaign = '(not set)';
    var utmterm = '(not set)';
    var utmcontent = '(not set)';
    if(url.indexOf('utm_source') != -1){   
    	var utmsource = searchParams.get('utm_source');
    }
    if(url.indexOf('utm_medium') != -1){
      	var utmmedium = searchParams.get('utm_medium');
    }
    if(url.indexOf('utm_campaign') != -1){
      	var utmcampaign = searchParams.get('utm_campaign');
    }
    if(url.indexOf('utm_term') != -1){
      	var utmterm = searchParams.get('utm_term');
    }
    if(url.indexOf('utm_content') != -1){
      	var utmcontent = searchParams.get('utm_content');
    }
    if(url.indexOf('utm_campaign') != -1){
        webengage.track('UTM parameters',{
            "UTM campaign": utmsource,
            "UTM Source": utmsource,
            "UTM Medium": utmmedium,
            "UTM Content": utmcontent,
            "UTM Term": utmterm
        });
     }
    
  },
  // facebook_event: function(total_price, total_qty){    
  //      fbq('track', 'AddToCart', {value: total_price, currency: 'INR', number_item:total_qty}); 
  // }
  
}

function set_timeinterval(){
   nyumi_api.loader_function();
}

// update_cart_price()


// $(function(){
//$(window).load(function() {
    
  
  nyumi_api.outher_option();
  
  nyumi_api.product_page();
  
  nyumi_api.mincart();
  
  setTimeout(function(){  
    if($('body').hasClass('template-index') ){    
        scroll_top();  
    	$('.reload_bg').fadeOut();
        home_line_scroll(); 
    } 
  },1300);
  
  setTimeout(function(){ 
  		$('.insta_header, #insta-feed').show();
  }, 7400);
  
 
   
   set_timeinterval();
   nyumi_api.load_gif();
  
   nyumi_api.webengage_page_click();
  
   nyumi_api.taccking_url();
  
   var search = window.location.search;    
    if(search == '?customer_posted=true' || search == '?form_type=customer'){   
      	subscription_msg();
    }
// });


function scroll_top(){
   var search = window.location.search;    
    if(search == '?customer_posted=true' || search == '?form_type=customer'){   
      	subscription_msg();
      
    }else{
     $('body, html').animate({scrollTop: 0}, 200);
    }
}
 
 function subscription_msg(){
  		setTimeout(function(){
      		$('body, html').animate({scrollTop: $('#footer1_section').offset().top}, 200);
        }, 300);
 }


var slidesToShow1 = 4;
$(window).on("load resize", function(){
  if($(window).width() < 769) {
    slidesToShow1 = 1;
    if($(".product-single__thumbnails").hasClass("slick-initialized")) {
      $(".product-single__thumbnails").slick('unslick');
      $(".product-single__thumbnails").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  	}
    else {
      $(".product-single__thumbnails").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
  else {
    slidesToShow1 = 4;
    if($(".product-single__thumbnails").hasClass("slick-initialized")) {
      $(".product-single__thumbnails").slick('unslick'); 
    }
  }
 
  slider_int();
  
});

function slider_int(){
  setTimeout(function(){
     if($(".component_slider").hasClass("slick-initialized")) {
      $(".component_slider").slick('unslick');
    }
    $(".component_slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: slidesToShow1,
      slidesToScroll: 1
    });
  },300);
  
}

var window_width = $(window).width();

$(window).on("resize", function(){
  testimonial_slider();
   nyumi_api.slder_product(); 
  
   if($('body').hasClass('template-index')){
     var resize = $(window).width();
     if(window_width >769 &&  resize < 769){
        location.reload();
     }
     if(window_width < 769 &&  resize > 769){
        location.reload();
     }
     window_width = resize;
   }
  
});

 

function testimonial_slider(){
   var slideToShow = 3;
   $('.slider-nav').css('opacity', 0);
  
  if($(window).width() > 768 && $(window).width() < 1024) {
    
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 2;
    setTimeout(function(){
      syncSlides(slideToShow);
    }, 100);
    
  }else if($(window).width() < 769) {
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 1;
    setTimeout(function(){
      syncSlides(slideToShow);
    }, 100);
    
  }
  else {
    if($(".slicks").hasClass("slick-initialized")) {
      $(".slicks").slick("unslick");
    }
    if($(".slider-nav").hasClass("slick-initialized")) {
      $('.slider-nav').slick("unslick");
    }
    slideToShow = 3;
    setTimeout(function(){
    	syncSlides(slideToShow);
    }, 100);
  }
  
}


 




$('.slicks').on("afterChange", function(event, slick, currentSlide) { 
  if(currentSlide == 0){
    $('.testimonial_first .slick-prev').addClass('slick-disabled');
  }else{
     $('.testimonial_first .slick-prev').removeClass('slick-disabled');
  }
  //
  if( (currentSlide + 1) === slick.slideCount){
     $('.testimonial_first .slick-next').addClass('slick-disabled');
  }else{
     $('.testimonial_first .slick-next').removeClass('slick-disabled');
  }
 
});

function syncSlides(slideToShow) { 
  var speed = 0;
  if($(window).width() < 769) {
     speed = 2000;
  }
        $('.slider-nav').slick({
        slidesToShow: slideToShow,
        slidesToScroll: 1,    
        asNavFor: '.slicks',
        dots: false,
        arrows: false,  
        centerMode: true,         
        speed: speed,
        infinite: false, 
        focusOnSelect: false,
          mobileFirst:true,
          responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 2000             
            }
          }]
      });
  $('.slicks').slick({
      dots: false,
      infinite: false,
      arrows: true,  
      speed: 200,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    
      });
  
      $('.slicks').slick('slickGoTo', 0);
      //$('.slider-nav').slick('slickGoTo', 1);
  
     $('.slider-nav').css('opacity', 1);
}


$('.slicks').on("afterChange", function(event, slick, currentSlide){
  console.log(currentSlide);
  $('.test_hover_img .test_prd').hide();
  $('.test_hover_img .test_prd[data-count="'+currentSlide+'"]').show();
});
                

$("body").on("click", ".vertical-scroller li", function(){
  var ind = $(this).index();
  $(".vertical-scroller li").removeClass("active");
  $(this).addClass("active");
  $(".fade-slider li").removeClass("active");
  $(".fade-slider li:eq("+ind+")").addClass("active");
});

$("body").on("click", ".ingf_list ul li", function(){
  var ind = $(this).index();
  $(".ingf_list ul li").removeClass("active");
  $(this).addClass("active");
  
  $(".ingf-slider li").removeClass("active");
  $(".ingf-slider li:eq("+ind+")").addClass("active");
});
$("body").on("click", ".toggle-nutrition", function(event){
  event.preventDefault();
  if(!$(this).hasClass("active")) {
   $(this).text("nutrition info -");
  }
  else {
    $(this).text("nutrition info +");
  }
  $(this).toggleClass("active");
  
  $(this).parent().next(".show-nutrition").stop().fadeToggle();
});

//$(window).load(function(){
// $(function(){   
  
//   setTimeout(function(){ 
//      if(!$('body').hasClass('template-blog') ){    
//     	 scroll_top();
//      }
    
//     $('.reload_bg').fadeOut();
//     home_line_scroll();
//     bundle_scoll();
//   },1300);
  
  
  
// });

function bundle_scoll(){
   
  var $url = $(location).attr('hash'); 
   
   if ($url.length === 0) {
        return;
    }

   var pos = $($url).offset().top;
    // animated top scrolling
   $('body, html').animate({scrollTop: pos}, 300);
}



// menu scroll 

var position = $(window).scrollTop(); 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        
        $('body').removeClass('add_top_menu');
    } else {
          
         $('body').addClass('add_top_menu');
    }
    position = scroll;
  
  home_line_scroll();
});




function home_line_scroll(){
  if($('.Science_section').length > 0)
  if($('.Science_section').isInViewport()) {
      $('.Science_section').addClass('active');
  }  
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Oops, the form is incomplete. Please fill in all fields to submit.");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

