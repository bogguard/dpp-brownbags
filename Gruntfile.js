module.exports = function(grunt) {

	grunt.initConfig({

	    'http-server': {

	        'dev': {

	            // the server root directory
	            root: '/Applications/MAMP/htdocs/dpp-brownbags/' ,

	            port: 8100,
	            // port: function() { return 8282; }

	            host: "127.0.0.1",

	            cache: 50000,
	            showDir : true,
	            autoIndex: true,

	            // server default file extension
	            ext: "html",

	            // run in parallel with other tasks
	            runInBackground: false

	        }

	    }
	});

	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default', ['http-server:dev']);
};
