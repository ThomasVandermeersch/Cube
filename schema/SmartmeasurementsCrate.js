cube(`SmartmeasurementsCrate`, {
  sql: `SELECT * FROM doc.smartmeasurements_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    SmartdevicesCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.smartdevice_id = ${SmartdevicesCrate}.id`,
    },
    SmartmeasurementsDataCrate: {
      relationship: `hasMany`,
      sql: `${CUBE.id} = ${SmartmeasurementsDataCrate.smartmeasurementId}`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, smartdeviceId, updatedat, timestamp]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    smartdeviceId: {
      sql: `smartdevice_id`,
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
