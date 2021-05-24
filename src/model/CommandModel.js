let CommandModel =  function (type,labels, primaryDataset, secondaryDataset, outputFile) {
    this.type = type;
    this.labels = labels;
    this.primaryDataset = primaryDataset;
    this.secondaryDataset = secondaryDataset;
    this.outputFile = outputFile;
}
module.exports = CommandModel;