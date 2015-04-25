/**
 * Created by tommyZZM on 14-10-16.
 */
function PictureProgress(file, container) {
    this.fileID = file.id;
    this.file = file;

    this.pictureProgresser = $('#' + this.fileID);//主要通过这个ID区分每一个上传文件
    if(!this.pictureProgresser.length){//判断是否已经添加
        this.pictureProgresser = $('<li></li>');
        var Wrappeer = this.pictureProgresser;
        Wrappeer.attr('id', this.fileID).addClass('progressContainer');

        var linkWrapper = $("<div></div>");
        linkWrapper.addClass('img-tb')

        var linkInfo = $("<div></div>");linkInfo.addClass('img-info');
        var infoTitle = $("<div></div>");infoTitle.addClass('title');
        var infointro = $("<div></div>");infointro.addClass('intro');

        var linkUpload = $('<div></div>');linkUpload.addClass('img-upload')

        var progressBarWarpper = $("<div></div>");
        progressBarWarpper.addClass('progress');
        var progressBar = $("<div/>");
        progressBar.addClass("progress-bar progress-bar-striped active")
            .attr('role', 'progressbar')
            .attr('aria-valuemax', 100)
            .attr('aria-valuenow', 0)
            .attr('aria-valuein', 0)
            .width('0%');

        linkInfo.append(infoTitle).append(infointro);

        linkUpload.append(progressBarWarpper);

        progressBarWarpper.append(progressBar);

        Wrappeer.append(linkWrapper).append(linkInfo).append(linkUpload);

        $('#' + container + '>ul').append(Wrappeer);
    }


}

/**进度条**/
PictureProgress.prototype.setProgress = function(percentage, speed, chunk_size){
    percentage = parseInt(percentage, 10);

    var file = this.file;
    var uploaded = file.loaded;
    var progressbar = this.pictureProgresser.find('.img-upload').find('.progress').find('.progress-bar');

    var size = plupload.formatSize(uploaded).toUpperCase();
    var formatSpeed = plupload.formatSize(speed).toUpperCase();

    if (file.status !== plupload.DONE && percentage === 100) {
        percentage = 99;
    }

    progressbar.attr('aria-valuenow', percentage).css('width', percentage + '%');

    console.log(percentage + " ;" +formatSpeed + " ;"+ size);
    console.log("chunk_size;"+ chunk_size);
}

/**终止上传**/
PictureProgress.prototype.setCancelled= function(manual) {

}

/**上传完成**/
PictureProgress.prototype.setComplete = function(up, info) {

    var domain = up.getOption('domain');

    var res = $.parseJSON(info);
    var sourceLink = domain + res.key;

    var imgTb = this.pictureProgresser.find('.img-tb');
    var showImg = $('<a target="_blank"><img/></a>');imgTb.append(showImg);

    var progressbar = this.pictureProgresser.find('.img-upload').find('.progress');

    var linkMeta=addComponent('img-meta');
    var metaSize=addComponent('size');
    var metaStatu=addComponent('statu');

    metaStatu.text('上传成功!').css("color","#6aa71b");

    linkMeta.append(metaSize).append(metaStatu);

    progressbar.hide();
    this.pictureProgresser.find('.img-upload').append(linkMeta);

    showImg.attr('href', sourceLink).find('img').attr('src', sourceLink);

}

/**Functions**/
function addComponent(name){
    var component=$('<div></div>');
    component.addClass(name);
    return component;
}


