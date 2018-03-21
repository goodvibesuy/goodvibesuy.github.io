var express = require('express');
var router = express.Router();

var fs = require('fs');

router.post('/', function (req, res, next) { 
    
    console.log('POST ' + req.body);
    var buf = Buffer.from(req.body.data, 'base64');

    var dir = 'client\/dist\/images\/' + req.body.cat + '\/';
    var fileName = req.body.name;
    var path = dir + fileName;

    if(fs.existsSync(path)){
        fs.renameSync(path, dir + "temp_" + fileName);
    }
    fs.writeFile(path, buf, 'binary', function(err){
        if (err) {
            throw err
        }
        else {
            console.log('Recibida image: ' + req.body.name + '. Guardada: ' + path);
       }
   });

    res.send({ result: 1, message: "OK" });
});

module.exports = router;

            
// TODO: RESIZE !! 
            // gm(path)
            //     //.resize(240, 240)
            //     .drawCircle(10, 10, 20, 10)
            //     //.noProfile()
            //     .write(dir + smallFileName, function (err) {
            //         if (err) throw err; else console.log('done');
            //     });
            
            // im.resize({
            //     srcPath: path,
            //     dstPath: smallFileName,
            //     width:   20
            // }, function(err, stdout, stderr){
            //     if (err) throw err
            //     console.log('resized kittens.jpg to fit within 256x256px')
            // });
            // var image = new ImageResize(path);


            // image.loaded().then(function(){
            //     image.smartResizeDown({
            //         width: 20,
            //         height: 20
            //     }).then(function () {
            //         image.stream(function (err, stdout, stderr) {
                                 
            //               var a = fs.existsSync(dir + smallFileName);

            //             var writeStream = fs.createWriteStream(dir + smallFileName);
            //             stdout.pipe(writeStream);
            //         });
            //     });
            // });        



//             console.log('Recibida image: ' + req.body.name + '. Guardada: ' + path);
//        }
//    });

//     res.send({ result: 1, message: "OK" });
// });

// module.exports = router;
