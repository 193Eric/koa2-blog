/**
 * User: Kurten
 * Date: 14-3-1
 * Time: 11:24
 * Version: 1.0
 * Description:
 */
var snowflake = module.exports;

var twepoch = 1288834974657;
var workerIdBits = 5;
var dataCenterIdBits = 5;
var maxWrokerId = -1 ^ (-1 << workerIdBits);
var maxDataCenterId = -1 ^ (-1 << dataCenterIdBits);
var sequenceBits = 12;
var workerIdShift = sequenceBits;
var dataCenterIdShift = sequenceBits + workerIdBits;
var timestampLeftShift = sequenceBits + workerIdBits + dataCenterIdBits;
var sequenceMask = -1 ^ (-1 << sequenceBits);
var lastTimestamp = -1;
var BigInteger = require("./jsbn");
//设置默认值,从环境变量取
var c_workerId = 1;
var c_dataCenterId = 1;
var c_sequence = 0;

snowflake.init = function (config) {
    if (!isNaN(config.worker_id)) {
        c_workerId = Number(config.worker_id);
    }
    if (!isNaN(config.data_center_id)) {
        c_dataCenterId = Number(config.data_center_id);
    }
    if (!isNaN(config.sequence)) {
        c_sequence = Number(config.sequence);
    }
    if (c_workerId > maxWrokerId || c_workerId < 0) {
        throw new Error('config.worker_id must max than 0 and small than maxWrokerId-[' +
            maxWrokerId + ']');
    }
    if (c_dataCenterId > maxDataCenterId || c_dataCenterId < 0) {
        throw new Error('config.data_center_id must max than 0 and small than maxDataCenterId-[' + 
            maxDataCenterId + ']');
    }
};

snowflake.nextId = function (workerId, dataCenterId, sequence) {
    if (!isNaN(workerId)) {
        workerId = Number(workerId);
    } else {
        workerId = c_workerId;
    }
    if (!isNaN(dataCenterId)) {
        dataCenterId = Number(dataCenterId);
    } else {
        dataCenterId = c_dataCenterId;
    }
    if (!isNaN(sequence)) {
        sequence = Number(sequence);
    } else {
        sequence = c_sequence;
    }

    if (workerId > maxWrokerId || workerId < 0) {
        throw new Error('workerId must max than 0 and small than maxWrokerId-[' + 
            maxWrokerId + ']');
    }
    if (dataCenterId > maxDataCenterId || dataCenterId < 0) {
        throw new Error('dataCenterId must max than 0 and small than maxDataCenterId-[' + 
            maxDataCenterId + ']');
    }

    var timestamp = timeGen();
    if (lastTimestamp === timestamp) {
        sequence = (sequence + 1) & sequenceMask;
        if (sequence === 0) {
            timestamp = tilNextMillis(lastTimestamp);
        }
    } else {
        sequence = 0;
    }
    if (timestamp < lastTimestamp) {
        throw new Error('Clock moved backwards. Refusing to generate id for ' + 
            (lastTimestamp - timestamp));
    }

    lastTimestamp = timestamp;
    var shiftNum = (dataCenterId << dataCenterIdShift) |
        (workerId << workerIdShift) | sequence;
    var nfirst = new BigInteger(String(timestamp - twepoch), 10);
    nfirst = nfirst.shiftLeft(timestampLeftShift);
    var nnextId = nfirst.or(new BigInteger(String(shiftNum), 10));
    var nextId = nnextId.toRadix(10);
    return String(nextId);
};

function tilNextMillis(lastTimestamp) {
    var timestamp = timeGen();
    while (timestamp <= lastTimestamp) {
        timestamp = timeGen();
    }
    return timestamp;
}

function timeGen() {
    var dt = new Date();
    return dt.getTime();
}