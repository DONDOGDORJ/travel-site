const path = require("path");
const postCSSPlugings = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'), 
    require('autoprefixer')

    ];
module.exports ={
    entry: "/app/assets/scripts/app.js",
    output:{
        filename:"bundled.js",
        path: path.resolve(__dirname,"app")
    },
    // congif devServer we do not need watch : true
    // we use browser without refresh
    devServer :{
      
        static: {
            directory: path.join(__dirname, "app")
          },
        hot : true, 
        // hot gdg maani js bolon css iig browserlu inject hiiged refresh hiihguiger tuhain oorchloltuudg haruulj bh
        port : 3000,
        host: "0.0.0.0"
    },
    mode:'development',
    
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader",
                   { loader : 'postcss-loader', options:{postcssOptions:{plugins:
                postCSSPlugings
                }}
                }]
            }
        ]
    }
};