cube(`AssetssmartdevicesCrate`, {
  sql: `SELECT * FROM doc.assetssmartdevices_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    AssetsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.asset_id = ${AssetsCrate}.id`,
    },
    SmartdevicesCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.device_id = ${SmartdevicessCrate}.id`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [assetId, smartdeviceId]
    }
  },
  
  dimensions: {
    assetId: {
      sql: `asset_id`,
      type: `string`,
      primaryKey : true
    },
    
    smartdeviceId: {
      sql: `smartdevice_id`,
      type: `string`,
      primaryKey : true
    }
  },
  
  dataSource: `default`
});
