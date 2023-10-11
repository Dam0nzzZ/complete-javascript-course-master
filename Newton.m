% 模型参数
m = 4; % 质量
k = 4; % 弹簧刚度
tspan = [0, 10]; % 时间范围
h = 0.01; % 步长

% 求解阻尼系数f的取值范围
f_range = 4:0.1:12; % 阻尼系数范围
stable_f = [];
for f = f_range
    % 计算单位阶跃响应
    r = @(t) (t >= 0); % 单位阶跃输入
    y0 = 0; % 初始位移
    v0 = 0; % 初始速度

    % 使用欧拉法进行数值求解
    y = y0;
    v = v0;
    for t = tspan(1):h:tspan(2)
        a = (r(t) - f*v - k*y)/m;
        v = v + h*a;
        y = y + h*v;
    end

    % 判断单位阶跃响应是否发生振荡
    if max(abs(y)) < 0.1
        stable_f = [stable_f f];
    end
end

% 输出阻尼系数取值范围
disp(['阻尼系数f的取值范围：'+num2str(min(stable_f)) ' <= f <= ' num2str(max(stable_f))]);