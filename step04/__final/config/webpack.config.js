const webpack = require('webpack');
const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, path.join('src'));
const BUILD_DIR = path.resolve(ROOT, path.join('../','public'));

const withPlatform = platform => {
  const platformLabel = platform===''
                          ?'development build' 
                          :`built for ${platform}`
  return [
		new webpack.DefinePlugin({
			PLATFORM: JSON.stringify(platformLabel)
		})
  ];
}

const toConfig = (env={}) => {
  const {
    platform=''
  } = env;

  return {
    devtool: 'eval-source-map',
    entry: [
      path.join(APP_DIR, 'index.js')
    ],
    output: {
      path: BUILD_DIR,
      pathinfo: true,
      filename: 'bundle.js'
    },
    module : {
      rules : [{
        test : /\.js$/,
        loader : 'babel-loader',
        exclude: /(node_modules|bower_components)/,
    		options:  { 
          cacheDirectory: true,
          presets: ['react', 'es2015']
    		}
      },{
        test: /\.svg$/,
        loader: 'url-loader',
        options:  { 
          limit: 500000 
        }
      },{
        test: /\.css$/,
        use: [{
        	loader: 'style-loader'
        },{
  				loader: "css-loader",
  				options: {
  					camelCase: true
  				}
        }],
      }]
    },
	  plugins: withPlatform(platform)    
  };
}

module.exports = toConfig;