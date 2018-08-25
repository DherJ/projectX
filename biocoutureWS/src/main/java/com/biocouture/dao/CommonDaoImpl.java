package com.biocouture.dao;


import java.util.List;

import org.apache.ibatis.exceptions.PersistenceException;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;


/**
 * Implementation class of {@link CommonDao}.
 *
 * @since 8 Mar 2017
 * @version 1.0-SNAPSHOT
 * @author Sayid Sidqi
 */
public abstract class CommonDaoImpl<T, PK> implements CommonDao<T, PK> {

	private static final Logger LOG = LoggerFactory.getLogger(CommonDaoImpl.class);

	private Class<T> type;

	@Autowired
	private SqlSessionFactory sqlSessionFactory;
	
	public static final String PREFIX_SELECT_QUERY = "find";
	public static final String PREFIX_INSERT_QUERY = "insert";
	public static final String PREFIX_UPDATE_QUERY = "update";
	public static final String PREFIX_DELETE_QUERY = "delete";
	public static final String SUFFIX_MAPPER = "Mapper";

	@SuppressWarnings("unchecked")
	public CommonDaoImpl() {
		Class<T>[] type = (Class[]) GenericTypeResolver.resolveTypeArguments(getClass(), CommonDaoImpl.class);
		this.type = type[0];
	}

	protected Class<T> getType() {
		return type;
	}

	protected SqlSessionFactory getSqlSessionFactory() {
		return sqlSessionFactory;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Long insert(T entity) {
		SqlSession session = sqlSessionFactory.openSession();
		Long status = null;
		try {
			String className = entity.getClass().getSimpleName();
			String query = className + SUFFIX_MAPPER + "." + PREFIX_INSERT_QUERY + className;
			status = (long) session.insert(query, entity);
			session.commit();
		} catch (PersistenceException pe) {
			session.rollback();
			LOG.error("Could not persist the given entity", pe);
		} finally {
			session.close();
		}
		return status;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public T find(PK id) {
		SqlSession session = sqlSessionFactory.openSession();
		T entity = null;
		try {
			String className = this.type.getSimpleName();
			String query = className + SUFFIX_MAPPER + "." + PREFIX_SELECT_QUERY + className;
			entity = session.selectOne(query, id);
		} catch (PersistenceException pe) {
			LOG.error("Error occurs while finding the entity", pe);
		} finally {
			session.close();
		}
		return entity;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<T> findAll() {
		SqlSession session = sqlSessionFactory.openSession();
		List<T> entities = null;
		try {
			String className = this.type.getSimpleName();
			String query = className + SUFFIX_MAPPER + "." + PREFIX_SELECT_QUERY + "All" + className;
			entities = session.selectList(query);
		} catch (PersistenceException pe) {
			LOG.error("Error occurs while populating the entities", pe);
		} finally {
			session.close();
		}
		return entities;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Long update(T entity) {
		SqlSession session = sqlSessionFactory.openSession();
		Long status = null;
		try {
			String className = entity.getClass().getSimpleName();
			String query = className + SUFFIX_MAPPER + "." + PREFIX_UPDATE_QUERY + className;
			status = (long) session.update(query, entity);
			session.commit();
		} catch (PersistenceException pe) {
			session.rollback();
			LOG.error("Could not update the given entity", pe);
		} finally {
			session.close();
		}
		return status;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Long delete(PK id) {
		SqlSession session = sqlSessionFactory.openSession();
		Long status = null;
		try {
			String className = this.type.getSimpleName();
			String query = className + SUFFIX_MAPPER + "." + PREFIX_DELETE_QUERY + className;
			status = (long) session.delete(query, id);
			session.commit();
		} catch (PersistenceException pe) {
			session.rollback();
			LOG.error("Could not remove the given entity", pe);
		} finally {
			session.close();
		}
		return status;
	}

}
