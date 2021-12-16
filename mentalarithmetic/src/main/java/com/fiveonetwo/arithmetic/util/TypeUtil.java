package com.fiveonetwo.arithmetic.util;

import com.fiveonetwo.arithmetic.entity.Score;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TypeUtil<T> {
    static Map<Integer, String> typeDic = new HashMap<>();
    static {
        typeDic.put(121, "2位整数十分钟测试");
        typeDic.put(122, "2位整数100道测试");
        typeDic.put(123, "2位整数正确100题");

        typeDic.put(131, "3位整数十分钟测试");
        typeDic.put(132, "3位整数100道测试");
        typeDic.put(133, "3位整数正确100题");

        typeDic.put(141, "4位整数十分钟测试");
        typeDic.put(142, "4位整数100道测试");
        typeDic.put(143, "4位整数正确100题");

        typeDic.put(221, "2位实数十分钟测试");
        typeDic.put(222, "2位实数100道测试");
        typeDic.put(223, "2位实数正确100题");

        typeDic.put(231, "3位实数十分钟测试");
        typeDic.put(232, "3位实数100道测试");
        typeDic.put(233, "3位实数正确100题");

        typeDic.put(241, "4位实数十分钟测试");
        typeDic.put(242, "4位实数100道测试");
        typeDic.put(243, "4位实数正确100题");

        typeDic.put(321, "2位分数十分钟测试");
        typeDic.put(322, "2位分数100道测试");
        typeDic.put(323, "2位分数正确100题");

        typeDic.put(331, "3位分数十分钟测试");
        typeDic.put(332, "3位分数100道测试");
        typeDic.put(333, "3位分数正确100题");

        typeDic.put(341, "4位分数十分钟测试");
        typeDic.put(342, "4位分数100道测试");
        typeDic.put(343, "4位分数正确100题");
    }

    /**
     * 返回指定类型对应的字符串
     * @param type 指定类型值
     * @return 对应字符串
     */
    public static String getName(Integer type){
        return typeDic.get(type);
    }

    /**
     * 针对Score类封装的方法，用来将type对应的typeName赋值进去
     * @param scores 要执行的scores列表
     * @return 处理后的scores
     */
    public static  List<Score> typeFormat(List<Score> scores){
        for (int i = 0; i < scores.size(); i++) {
            scores.get(i).setTypeName(TypeUtil.getName(scores.get(i).getType()));
        }
        return scores;
    }
}
