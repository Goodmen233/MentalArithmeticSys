package com.fiveonetwo.arithmetic.mapper;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;

import java.util.List;

public interface UserMapper {
    List<User> selectUser(User user);

    int updateUser(User user);

    int insertUser(User user);

    int selectTestNumById(Integer userId);

    List<Score> selectAllTestScoreById(Integer userId);

    List<Score> selectAllTestHighScoreById(Integer userId);
}
