cube(`TeamsCrate`, {
  sql: `SELECT * FROM doc.teams_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdat]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    solution: {
      sql: `solution`,
      type: `string`
    },
    
    createdat: {
      sql: `createdat`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
