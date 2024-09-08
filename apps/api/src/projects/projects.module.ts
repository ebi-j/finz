import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { CreateProjectHandler } from '../common/command/project/handler/CreateProjectHandler';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '../common/entity';

const commandHandlers = [CreateProjectHandler];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([ProjectEntity])],
	providers: [ProjectsService, ...commandHandlers],
	controllers: [ProjectsController],
})
export class ProjectsModule {}
