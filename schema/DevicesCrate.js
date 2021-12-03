cube(`DevicesCrate`, {
  sql: `SELECT * FROM doc.devices_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    TeamsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.device_id = ${TeamsCrate}.id`,
    },
    MeasurementsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE.id} = ${MeasurementsCrate.deviceId}`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, teamId, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true,
      shown : true
    },
    
    teamId: {
      sql: `team_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
