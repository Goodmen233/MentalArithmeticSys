package com.fiveonetwo.arithmetic.service.impl;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;
import com.fiveonetwo.arithmetic.mapper.ScoreMapper;
import com.fiveonetwo.arithmetic.mapper.UserMapper;
import com.fiveonetwo.arithmetic.service.UserService;
import com.fiveonetwo.arithmetic.util.TypeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ScoreMapper scoreMapper;

    @Override
    public List<User> selectUser(User user) {
        return userMapper.selectUser(user);
    }

    @Override
    public int selectTestNumById(Integer userId) {
        return userMapper.selectTestNumById(userId);
    }

    @Override
    public List<Score> selectAllTestScoreById(Integer userId) {
        List<Score> scores =  userMapper.selectAllTestScoreById(userId);
        return TypeUtil.typeFormat(scores);
    }

    @Override
    public List<Score> selectAllTestHighScoreById(Integer userId) {
        List<Score> scores = userMapper.selectAllTestHighScoreById(userId);
        return TypeUtil.typeFormat(scores);
    }

    @Override
    public int insertScore(Score score) {
        score.setTime(new Date());
        int finalScore = (score.getNum() / score.getTimeStamp()) * 1000;
        score.setFinalScore(finalScore);
        return scoreMapper.insertScore(score);
    }

    @Override
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }

    @Override
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }
}
