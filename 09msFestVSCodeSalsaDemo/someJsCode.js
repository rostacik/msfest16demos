/** computer object
 * @constructor
 * @param  {string} cpu type
 * @param  {number} ram amount
 */
function Computer(cpu, ram) {
    this.CPU = cpu;
    this.RAM = ram;
}

var c1 = new Computer();
var c2 = new Computer(1, 1);
var c3 = getComputer();
console.log(c3.CPU);

//$.ajax