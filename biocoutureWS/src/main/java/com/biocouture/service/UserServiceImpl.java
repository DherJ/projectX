package com.biocouture.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.biocouture.bo.User;
import com.biocouture.dao.UserMapper;

/**
 * Implementation class of {@link UserService}.
 *
 * @author jérôme Dhersin
 */
@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public List<User> findAll() {
		return this.userMapper.findAll();
	}

	@Override
	public User findById(Integer userId) {
		return this.userMapper.find(userId);
	}
	
	@Override
	public Long save(User user) {
		return this.userMapper.insert(user);
	}

	@Override
	public Long update(User user) {
		return this.userMapper.update(user);
	}

	@Override
	public Long delete(Integer userId) {
		return this.userMapper.delete(userId);
	}

}
