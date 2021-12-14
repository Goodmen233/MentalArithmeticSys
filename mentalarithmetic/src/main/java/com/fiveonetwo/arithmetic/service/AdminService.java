package com.fiveonetwo.arithmetic.service;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;

import java.util.List;

public interface AdminService {
    List<User> selectUser(User user);

    List<User> getAllUser();

    int updateUser(User user);

    List<Score> getAllUserScore();

    List<Score> getAvgScore();
}
