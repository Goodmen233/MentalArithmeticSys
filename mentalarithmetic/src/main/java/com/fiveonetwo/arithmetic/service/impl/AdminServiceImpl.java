package com.fiveonetwo.arithmetic.service.impl;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;
import com.fiveonetwo.arithmetic.mapper.ScoreMapper;
import com.fiveonetwo.arithmetic.mapper.UserMapper;
import com.fiveonetwo.arithmetic.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ScoreMapper scoreMapper;

    @Override
    public List<User> selectUser(User user) {
        return userMapper.selectUser(user);
    }

    @Override
    public List<User> getAllUser() {
        return userMapper.selectUser(new User());
    }

    @Override
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }

    @Override
    public List<Score> getAllUserScore() {
        return scoreMapper.selectScore(new Score());
    }

    @Override
    public List<Score> getAvgScore() {
        return scoreMapper.getAvgScore();
    }
}
