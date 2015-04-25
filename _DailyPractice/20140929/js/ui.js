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

        var linkInfo = $("<div></div>");
        linkInfo.addClass('img-info');
        var infotitle = $("<div></div>");
        infotitle.addClass('title');
        var infointro = $("<div></div>");
        infointro.addClass('intro');

        var progressBarWarpper = $("<div></div>");
        progressBarWarpper.addClass('progress');
        var progressBar = $("<div/>");
        progressBar.addClass("progress-bar progress-bar-striped active")
            .attr('role', 'progressbar')
            .attr('aria-valuemax', 100)
            .attr('aria-valuenow', 0)
            .attr('aria-valuein', 0)
            .width('0%');

        linkInfo.append(infotitle).append(infointro);

        progressBarWarpper.append(progressBar);

        Wrappeer.append(linkWrapper).append(linkInfo).append(progressBarWarpper);

        $('#' + container + '>ul').append(Wrappeer);
    }


}

PictureProgress.prototype.setProgress = function(percentage, speed, chunk_size){
    percentage = parseInt(percentage, 10);

    var file = this.file;
    var uploaded = file.loaded;
    var progressbar = this.pictureProgresser.find('.progress').find('.progress-bar');

    var size = plupload.formatSize(uploaded).toUpperCase();
    var formatSpeed = plupload.formatSize(speed).toUpperCase();

    if (file.status !== plupload.DONE && percentage === 100) {
        percentage = 99;
    }

    progressbar.attr('aria-valuenow', percentage).css('width', percentage + '%');

    console.log(percentage + " ;" +formatSpeed + " ;"+ size);
    console.log("chunk_size;"+ chunk_size);
}


PictureProgress.prototype.setComplete = function(up, info) {
    var progressbar = this.pictureProgresser.find('.progress');
    progressbar.hide();
}


