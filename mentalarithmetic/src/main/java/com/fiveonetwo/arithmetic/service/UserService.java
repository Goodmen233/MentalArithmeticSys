package com.fiveonetwo.arithmetic.service;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;

import java.util.List;

public interface UserService {
    List<User> selectUser(User user);

    int selectTestNumById(Integer userId);

    List<Score> selectAllTestScoreById(Integer userId);

    List<Score> selectAllTestHighScoreById(Integer userId);

    int insertScore(Score score);

    int updateUser(User user);

    int insertUser(User user);
}
