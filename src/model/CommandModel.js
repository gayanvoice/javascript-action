let CommandModel =  function (type,labels, primaryDataset, outputFile) {
    this.type = type;
    this.labels = labels;
    this.primaryDataset = primaryDataset;
    this.outputFile = outputFile;
}
module.exports = CommandModel;