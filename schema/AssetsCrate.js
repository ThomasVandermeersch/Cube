cube(`AssetsCrate`, {
  sql: `SELECT * FROM doc.assets_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    AssettypesCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.type_id = ${AssettypesCrate}.id`,
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, teamId, typeId, name, createdbyId, parentId]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    teamId: {
      title : "Team",
      sql: `team_id`,
      type: `string`
    },
    
    typeId: {
      sql: `type_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    createdbyId: {
      sql: `createdby_id`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    parentId: {
      sql: `parent_id`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
