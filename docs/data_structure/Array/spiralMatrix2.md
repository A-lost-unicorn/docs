---
title:  59. 螺旋矩阵 II
---
[[toc]]
59. 螺旋矩阵 II
[力扣链接](https://leetcode.cn/problems/spiral-matrix-ii/)

给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。

> 输入：n = 3  
输出：[[1,2,3],[8,9,4],[7,6,5]]

## 思路  

## 循环不变量原则
要坚持循环不变量原则  
模拟顺时针画矩阵的过程:  
+ 填充上行从左到右
+ 填充右列从上到下
+ 填充下行从右到左
+ 填充左列从下到上  
由外向内一圈一圈这么画下去。  
1、 每画一条边都要坚持一致的左闭右开，或者左开右闭的原则，这样这一圈才能按照**统一的规则**画下来。  
2、当矩阵大小为奇数时，最中间的位置需要单独赋值以确保数据的完整性

~~~java
class Solution {
    public int[][] generateMatrix(int n) {
        int x = 0, y = 0;
        int loop = n/2; //控制转几次圈
        int offset = 1; //控制遍历长度
        int [][] res = new int [n][n];
        int count = 1;
        int i,j;
        while(loop-- > 0){
            i = x;
            j = y;

            for(j = y; j < n - offset; j++){res[x][j] = count++;}
            for(i = x; i < n - offset; i++){res[i][j] = count++;}
            for(; j > y; j--){res[i][j] = count++;}
            for(; i > x; i--){res[i][j] = count++;}

            x++;
            y++;

            offset++;
        }
        if(n % 2 == 1){
            res[n/2][n/2] = count;
        }
        return res;
    }
}
~~~