package com.fiveonetwo.arithmetic.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.service.UserService;
import com.fiveonetwo.arithmetic.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import sun.awt.ModalExclude;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String getIndex(HttpSession session){
        if(session.getAttribute("user") != null){
            return "userInfo";
        }
        return "index";
    }

    @RequestMapping(value = "/exam",method = {RequestMethod.GET,RequestMethod.POST})
    public ModelAndView getExam(HttpServletRequest request){
        ModelAndView mav = new ModelAndView();
        String bit = request.getParameter("digit");
        String type = request.getParameter("type");
        String modal = request.getParameter("modal");
        mav.setViewName("exam");
        mav.addObject("bit",bit);
        mav.addObject("type",type);
        mav.addObject("modal",modal);

        System.out.println("bit="+bit+" type="+type+" modal"+modal);
        return mav;
    }

    /**
     * 登录接口
     * @param username 用户名
     * @param password 密码
     * @return 返回登录失败，或者管理员界面 或者用户界面
     */
    @PostMapping("/login")
    @ResponseBody
    public ModelAndView getUserInfo(String username, String password, HttpSession session){
        //页面跳转对象
        ModelAndView mav = new ModelAndView();
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        // 获取用户信息
        List<User> users = userService.selectUser(user);
        // 如果返回的用户对象的id为null，表示用户名或者密码错误，直接返回
        if(users.size() == 0){
            mav.setViewName("index");
            mav.addObject("errormessage",0);
            return mav;
        }
        user = users.get(0);
        // 判断是否是管理员，是直接返回页面
        if(user.getAuthority() == true){
            mav.setViewName("adminInfo");
            return mav;
        }
        Integer userId = user.getId();
        // 测试总数
        int testNum = userService.selectTestNumById(userId);
        // 各个类型测试的最高分
        List<Score> scores = userService.selectAllTestHighScoreById(userId);
        mav.setViewName("userInfo");
        session.setAttribute("user", user);
        session.setAttribute("testNum", testNum);
        session.setAttribute("scores", scores);
        return mav;
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
