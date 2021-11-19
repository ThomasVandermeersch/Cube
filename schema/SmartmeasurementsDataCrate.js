cube(`SmartmeasurementsDataCrate`, {
  sql: `SELECT * FROM doc.smartmeasurements_data_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    SmartmeasurementsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.measurement_id = ${SmartmeasurementsCrate}.id`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, smartmeasurementId]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    smartmeasurementId: {
      sql: `smartmeasurement_id`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    unit: {
      sql: `unit`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
