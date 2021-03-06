cube(`AssetsdevicesCrate`, {
  sql: `SELECT * FROM doc.assetsdevices_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    AssetsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE.assetId} = ${AssetsCrate.id}`,
    },
    DevicesCrate: {
      relationship: `hasOne`,
      sql: `${CUBE.deviceId} = ${DevicesCrate.id}`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [assetId, deviceId]
    }
  },
  
  dimensions: {
    assetId: {
      sql: `asset_id`,
      type: `string`,
      primaryKey : true
    },
    
    deviceId: {
      sql: `device_id`,
      type: `string`,
      primaryKey : true
    }
  },
  
  dataSource: `default`
});
