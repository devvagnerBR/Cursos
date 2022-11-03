class ResourceProcessorStation {
  constructor(name, monthlyProcessing) {
    this.name = name;
    this.monthlyProcessing = monthlyProcessing;
  }

// Month in Hours: 720h
  static calculateProcessInHours(monthlyProcessing, hours) {
    return (monthlyProcessing / 720) * hours;
  }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6);

console.log("Valor Total: " + totalProcessing.toFixed(2)); // Valor Total: 4.17

let processor = new ResourceProcessorStation("gaia", 2000);
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10);
console.log("Valor Total: " + totalProcessed.toFixed(2)); // Valor Total: 27.78
