package com.fiveonetwo.arithmetic.controller;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.service.UserService;
import com.fiveonetwo.arithmetic.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

//    个人信息
//    in：账号密码 out：用户名、姓名、测试总数、各个类型测试的最高分列表（类型、成绩、时间）/=》最近一次的游戏类型及分数
    @PostMapping("/login")
    @ResponseBody
    public Map<String, Object> getUserInfo(String username, String password){
        Map<String, Object> map = new HashMap<>();
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        // 获取用户信息
        List<User> users = userService.selectUser(user);
        // 如果返回的用户对象的id为null，表示用户名或者密码错误，直接返回
        if(users.size() == 0){
            return map;
        }
        Integer userId = users.get(0).getId();
        // 测试总数
        int testNum = userService.selectTestNumById(userId);
        // 各个类型测试的最高分
        List<Score> scores = userService.selectAllTestHighScoreById(userId);
        map.put("user", users.get(0));
        map.put("testNum", testNum);
        map.put("scores", scores);
        return map;
    }

//    历史测试信息
//    in：用户id out：历次测试信息列表（测试类型、分数、时间）
    @RequestMapping("/getAllScore")
    @ResponseBody
    public List<Score> getAllScore(Integer userId){
        return userService.selectAllTestScoreById(userId);
    }

//    上传测试结果信息
//    in：用户id、测试类型、成绩（结果）、时间 out：1 or -1
    @PostMapping("/uploadScore")
    @ResponseBody
    public int uploadScore(Integer userId, Integer type, Integer rightCount, Integer timeStamp){
        Score score = new Score();
        score.setUid(userId);
        score.setType(type);
        score.setNum(rightCount);
        score.setTimeStamp(timeStamp);
        return userService.insertScore(score);
    }

//    修改个人信息
//    in：用户id、密码、用户名 out：1 or-1
    @PostMapping("/updateUserInfo")
    @ResponseBody
    public int updateUserInfo(Integer userId, String username, String password){
        User user = new User();
        user.setUsername(username);
        // 如果服务器相同的用户名，则不让注册
        if(userService.selectUser(user).size() != 0){
            return -1;
        }
        user.setId(userId);
        user.setPassword(password);
        return userService.updateUser(user);
    }

//    注册
//    in：密码、用户名、姓名  out：1 or -1
    @PostMapping("/register")
    @ResponseBody
    public int register(String username, String password, String name, Boolean sex){
        User user = new User();
        user.setUsername(username);
        // 如果服务器相同的用户名，则不让注册
        if(userService.selectUser(user).size() != 0){
            return -1;
        }
        user.setPassword(password);
        user.setName(name);
        user.setSex(sex);
        return userService.insertUser(user);
    }
}
