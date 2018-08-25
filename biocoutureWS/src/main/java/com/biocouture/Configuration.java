package com.biocouture;

import javax.sql.DataSource;

import org.apache.ibatis.session.LocalCacheScope;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

@org.springframework.context.annotation.Configuration
@MapperScan( value = Configuration.PACKAGE_DAO )
@ComponentScan( value = Configuration.BASE_PACKAGE )
public class Configuration {

	public static final String BASE_PACKAGE = "com.biocouture";
	
	public static final String PACKAGE_BO = "com.biocouture.bo";
	
	public static final String PACKAGE_DAO = "com.biocouture.dao";
	
    @Bean
    @ConfigurationProperties( prefix = "spring.datasource" )
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager( this.dataSource() );
    }
    
    @Bean
    public SqlSessionFactory sqlSessionFactory( final DataSource dataSource ) throws Exception {
        final SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();
        ssfb.setFailFast( true );
        ssfb.setDataSource( dataSource );

        final PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        ssfb.setTypeAliasesPackage(PACKAGE_BO);
        ssfb.setMapperLocations( resolver.getResources( "classpath*:mappers/**/*Mapper.xml" ) );

        final SqlSessionFactory ssf = ssfb.getObject();

        ssf.getConfiguration().setCacheEnabled( true );
        ssf.getConfiguration().setLocalCacheScope( LocalCacheScope.STATEMENT );

        return ssf;
    }
    
}
