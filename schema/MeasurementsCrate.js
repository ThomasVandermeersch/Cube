cube(`MeasurementsCrate`, {
  sql: `SELECT * FROM doc.measurements_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    DevicesCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.device_id = ${DevicesCrate}.id`,
    },
    MeasurementsDataCrate: {
      relationship: `hasMany`,
      sql: `${CUBE.id} = ${MeasurementsDataCrate.measurementId}`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, deviceId, updatedat, timestamp]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    deviceId: {
      sql: `device_id`,
      type: `string`
    },
    
    updatedat: {
      sql: `updatedat`,
      type: `time`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
