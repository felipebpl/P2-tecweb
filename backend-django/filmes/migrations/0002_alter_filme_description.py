# Generated by Django 3.2.9 on 2021-11-09 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filmes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filme',
            name='description',
            field=models.CharField(max_length=200),
        ),
    ]
