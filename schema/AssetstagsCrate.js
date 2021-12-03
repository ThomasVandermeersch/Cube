cube(`AssetstagsCrate`, {
  sql: `SELECT * FROM doc.assetstags_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    AssetsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.asset_id = ${AssetsCrate}.id`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, assetId, linkedassetId, assetName]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true,
      title: `L`
    },
    
    assetId: {
      sql: `asset_id`,
      type: `string`
    },
    
    linkedassetId: {
      sql: `linkedasset_id`,
      type: `string`,
      title : "Linked"
    },
    
    assetName: {
      sql: `asset_name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
