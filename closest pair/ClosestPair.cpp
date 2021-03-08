#include <bits/stdc++.h>
using namespace std;

class Point
{
public:
    int x, y;
};

bool isEqual(Point point1, Point point2)
{
    return ((point1.x == point2.x) && (point2.y == point2.y));
}

void print(Point points[])
{
    for (int i = 0; i < 100; i++)
    {
        cout << points[i].x << " " << points[i].y << endl;
    }
}

void printGraph(Point points[])
{
    char graph[100][100];

    for (int i = 0; i < 100; i++)
        for (int j = 0; j < 100; j++)
            graph[i][j] = ' ';

    for (int i = 0; i < 100; i++)
    {
        graph[points[i].x][points[i].y] = '.';
    }

    for (int i = 99; i >= 0; i--)
    {
        if (i < 10)
            cout << i << " |";
        else
            cout << i << "|";

        for (int j = 0; j < 100; j++)
            cout << graph[i][j];
        cout << endl;
    }

    cout << "   ";
    for (int i = 1; i < 100; i += 5)
    {
        if (i >= 10)
            cout << i << "   ";
        else
            cout << i << "    ";
    }
    cout << 100;
}

float distance(Point point1, Point point2)
{
    return sqrt(pow((point2.x - point1.x), 2) + pow((point2.y - point1.y), 2));
}

void closestPair(Point points[], int size)
{
    float min = FLT_MAX;
    Point p1, p2;
    for (int i = 0; i < size; i++)
        for (int j = 0; j < size; j++)
            if (!isEqual(points[i], points[j]))
                if (distance(points[i], points[j]) < min)
                {
                    min = distance(points[i], points[j]);
                    p1 = points[i];
                    p2 = points[j];
                }

    cout << "The Smallest Distance is:" << min << endl;
    cout << "The points are: " << endl;
    cout << "[ " << p1.x << " , " << p1.y << " ]" << endl;
    cout << "[ " << p2.x << " , " << p2.y << " ]" << endl;
}

int main()
{
    srand((unsigned int)time(0));
    Point randomPoints[100];

    for (int i = 0; i < 100; i++)
    {
        randomPoints[i].x = rand() % 100;
        randomPoints[i].y = rand() % 100;
    }

    closestPair(randomPoints, 100);

    printGraph(randomPoints);

    return 0;
}
